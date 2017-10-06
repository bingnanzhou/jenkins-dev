FROM logstash

MAINTAINER Bingnan Zhou <bingnan.zhou@weather.com>

RUN /usr/share/logstash/bin/logstash-plugin install logstash-output-amazon_es

COPY logstash.conf /etc/logstash/conf.d/logstash.conf.new

CMD logstash -f /etc/logstash/conf.d/logstash.conf.new