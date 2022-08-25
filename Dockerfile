FROM node as nodegrpc
WORKDIR /code
LABEL key="nodegrpc"
COPY . .
EXPOSE 50051
CMD [ "npm", "run", "start"]