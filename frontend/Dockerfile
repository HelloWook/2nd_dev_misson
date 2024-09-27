FROM node:20.0.0

WORKDIR /devcourse-misson2/frontend

COPY package.json yarn.lock ./
RUN yarn install 

COPY . .

EXPOSE 3000

CMD [ "yarn","run","dev" ]