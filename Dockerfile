FROM centos:centos7

MAINTAINER Bingnan Zhou <bingnan.zhou@weather.com>

ENV os="centos" \
	osversion="7"

# Centos Config file
COPY selinux /etc/sysconfig/selinux

# Install wget, openssl, sed and NodeJS
RUN yum install -y wget openssl sed &&\
	package-cleanup -q --leaves | xargs -l1 yum -y remove &&\
	curl --silent --location https://rpm.nodesource.com/setup_6.x | bash - &&\
    yum -y install nodejs &&\
    yum clean all

#wget http://nodejs.org/dist/v6.11.1/node-v6.11.1-linux-x64.tar.gz &&\
#tar --strip-components 1 -xzvf node-v* -C /usr/local

# Setup the npm config
RUN npm config set prefix /home/centos/npm &&\
    npm config set _auth dGVhbS10aG9yLW1hY2hpbmUtdXNlcjpBUDh4d3o2VVdEQjViWEFOVnNKeVJ4NFZEVkQ= &&\
	npm config set email teamthor@weather.com &&\
	npm config set always-auth true &&\
	npm config set registry https://repo.artifacts.weather.com/api/npm/wsi-b2b-virtual/ &&\
    npm install twc-loopback-blueid-api@2.0.20 --verbose &&\
    npm config set _auth &&\
	npm config set email

# Expose port
EXPOSE 3000

# Attach log folder
VOLUME /api-log
COPY info /api-log/info

COPY current.prepiam.toronto.ca.ibm.com.pem /home/centos/npm/lib/node_modules/twc-loopback-blueid-api/dev/certs/current.prepiam.toronto.ca.ibm.com.pem

# Set launch file
COPY launch.sh launch.sh
RUN chmod 777 launch.sh

CMD ./launch.sh
#CMD node -r /home/centos/npm/lib/node_modules/twc-loopback-blueid-api/node_modules/s3env /home/centos/npm/lib/node_modules/twc-loopback-blueid-api/server/server.js dotenv_config_path=/twc-loopback-blueid-env

