FROM node:20

workdir /src/

copy package*.json ./

run npm install

copy . .

expose 80:9204

CMD ["npm", "start"]
