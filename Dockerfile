FROM node:16-alpine as build

WORKDIR /usr/app

COPY package*.json .
RUN npm install

COPY . .

RUN npm run build
COPY .env /usr/app/dist/.env

FROM node:16-alpine as production

WORKDIR /usr/app

COPY package*.json .

RUN npm install --only=production

COPY --from=build /usr/app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/server.js"]