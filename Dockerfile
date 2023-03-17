FROM node:16
COPY . /app
WORKDIR /app
RUN apt update && apt install -y sqlite3
RUN npm install -g node-pre-gyp
RUN npm install
RUN npm rebuild
EXPOSE 3000 
CMD [ "npm", "start" ]