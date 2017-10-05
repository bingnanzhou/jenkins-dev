FROM centos:centos7

MAINTAINER Bingnan Zhou <bingnan.zhou@weather.com>

ENV os="centos" \
	osversion="7"

# Key and Email for Weather Company's Artifactory Repo
ARG repo_key
ARG repo_email

# Centos Config file
COPY selinux /etc/sysconfig/selinux

# Install wget, openssl, sed and NodeJS
RUN yum install -y wget openssl sed &&\
	package-cleanup -q --leaves | xargs -l1 yum -y remove &&\
	curl --silent --location https://rpm.nodesource.com/setup_6.x | bash - &&\
    yum -y install nodejs &&\
    yum clean all

# Setup the npm config
RUN npm config set prefix /home/centos/npm &&\
    npm config set _auth $repo_key &&\
	npm config set email $repo_email &&\
	npm config set always-auth true &&\
	npm config set registry https://repo.artifacts.weather.com/api/npm/wsi-b2b-virtual/ &&\
    npm install twc-loopback-blueid-api -g &&\
    npm config set _auth &&\
	npm config set email

# Expose port
EXPOSE 3000

# Attach log folder
VOLUME /api-log
COPY info /api-log/info

# IBMid SSL Certificate
COPY current.prepiam.toronto.ca.ibm.com.pem /home/centos/npm/lib/node_modules/twc-loopback-blueid-api/dev/certs/current.prepiam.toronto.ca.ibm.com.pem

# Launch script
COPY launch.sh launch.sh
RUN chmod 777 launch.sh

CMD ./launch.sh


#### Dev use only ####

## How to build this dockerfile? Please run this command (end with the doc .)
# docker build --build-arg repo_key=PUT_YOUR_ARTIFACTORY_KEY --build-arg repo_email=PUT_YOUR_ARTIFACTORY_EMAIL -t DOCKER_TAG_YOU_WANT . 

## Another way to install NodeJS
# wget http://nodejs.org/dist/v6.11.1/node-v6.11.1-linux-x64.tar.gz &&\
# tar --strip-components 1 -xzvf node-v* -C /usr/local

## Loopback launch command
# CMD node -r /home/centos/npm/lib/node_modules/twc-loopback-blueid-api/node_modules/s3env /home/centos/npm/lib/node_modules/twc-loopback-blueid-api/server/server.js dotenv_config_path=/twc-loopback-blueid-env

