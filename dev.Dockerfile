FROM node:16 

WORKDIR /usr/src/app 

COPY package*.json ./

RUN npm ci

COPY ./src ./src

COPY .env .env

#  서버를 실행
CMD ["npm", "run", "dev"]