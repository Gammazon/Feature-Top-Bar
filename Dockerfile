FROM node:10
WORKDIR /Feature-Top-Bar
COPY package.json .
RUN npm install
COPY . .
EXPOSE 2424

CMD ["npm", "start"]
