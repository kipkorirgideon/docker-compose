FROM ubuntu:18.04

LABEL version="1.0.0"

LABEL maintainer="DevOps"

RUN apt-get update && \

    apt-get install curl -y 

RUN curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh

RUN bash nodesource_setup.sh

RUN apt-get install nodejs -y

RUN node --version

WORKDIR /app

RUN mkdir myvolume

ENV username="Kipkorir"

ENV password = "1234"

VOLUME /myvolume


COPY package.json /app/

RUN npm install

RUN npm run build

ADD build /app/

EXPOSE 3000


ENTRYPOINT [ "node" ]

CMD ["./app.js"]



