FROM centos:centos7

MAINTAINER Bingnan Zhou <bingnan.zhou@weather.com>

ENV nginxversion="1.12.0-1" \
	os="centos" \
	osversion="7"
	
# CentOS file 
COPY selinux /etc/sysconfig/selinux

# Yum repositories
COPY nginx.repo /etc/yum.repos.d/nginx.repo
COPY artifactory.repo  /etc/yum.repos.d/artifactory.repo 

# Install customized Nginx and then remove
# artifactory.repo for security purpose
RUN yum install -y nginx-module-hardhead2 && \
    rm -rf /etc/yum.repos.d/artifactory.repo

# Nginx config
COPY nginx.conf /etc/nginx/nginx.conf
COPY selfsigned.crt /etc/nginx/selfsigned.crt
COPY selfsigned.key /etc/nginx/selfsigned.key

# USAM Sample UI
COPY www /usr/local/www

# Expose port
EXPOSE 80
EXPOSE 443

CMD ["nginx"]

