FROM node:alpine 
WORKDIR /app

COPY ./package*  ./
RUN npm install  --force

RUN mkdir models
COPY ./models/postModel.js models/postModel.js
COPY ./models/userModel.js models/userModel.js
COPY ./server.js ./server.js

ENV MONGO_CONNECT_URL=mongodb://db:27017/linkedin

LABEL developer=si3mshady
EXPOSE 9000
CMD ["node", "server.js"]

# docker build . -f Dockerfile.be  -t si3mshady/linkedin_clone-be:1