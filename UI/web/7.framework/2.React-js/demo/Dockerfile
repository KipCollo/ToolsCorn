FROM node:24.11.0 AS build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine

COPY --from=build /app/build /var/www/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
