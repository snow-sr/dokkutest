FROM node:20

workdir /src/

copy package*.json ./

run npm install

copy . .

CMD ["npm", "start"]
