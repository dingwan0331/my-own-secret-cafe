FROM node:16 

WORKDIR /usr/src/app 

COPY package*.json ./

RUN npm ci --only=production

COPY ./src ./src

COPY .env .env

#  서버를 실행
CMD ["npm", "start"]