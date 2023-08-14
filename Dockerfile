FROM node:20

workdir /src/

copy package*.json ./

run npm install

copy . .

expose 9204

CMD ["npm", "start"]
