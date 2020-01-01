FROM node:latest

WORKDIR /var/www/app

COPY . ./

EXPOSE 6350

RUN npm install 

RUN npm run build

CMD ["npm","start"]