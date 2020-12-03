##### Stage 1
FROM node:latest as node
LABEL author="Thomas Bricchi"
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build -- --prod --base-href /restaurants/

##### Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/secure-safe /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

