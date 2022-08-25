FROM node:16.16.0 as nodegrpc
WORKDIR /code
LABEL key="nodegrpc"
COPY . .
RUN npm install
EXPOSE 50051
CMD [ "npm", "run", "start"]