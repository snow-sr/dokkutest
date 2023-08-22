FROM node:20

workdir /src/

copy package*.json ./

run npm install

copy . .

EXPOSE 9205

CMD ["npm", "start"]
