FROM nginx:latest

RUN mkdir -p /usr/share/man/man1
RUN apt-get update -y && apt-get install -y \
    unzip \
    curl \
    default-jre
	
WORKDIR /var/www/
RUN curl http://cdn.sencha.com/cmd/7.0.0.40/no-jre/SenchaCmd-7.0.0.40-linux-amd64.sh.zip -o SenchaCmd-7.0.0.40-linux-amd64.sh.zip
RUN unzip SenchaCmd-7.0.0.40-linux-amd64.sh.zip
RUN SenchaCmd-7.0.0.40-linux-amd64.sh sencha.sh
COPY sencha.sh /var/www/
RUN ./sencha.sh -q

# RUN  /root/bin/Sencha/Cmd/7.2.0.84/sencha ant -dconfig=local watch

EXPOSE 1841