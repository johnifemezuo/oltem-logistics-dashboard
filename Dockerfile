FROM node:16.13.0-alpine3.15

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV=production

RUN yarn build

EXPOSE 9331

CMD ["yarn", "start"]
