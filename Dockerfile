FROM node:latest as node
WORKDIR /app
COPY ./ /app/
RUN npm install
ARG configutation=production
RUN npm run build --configuration=$configuration

FROM nginx:alpine
COPY --from=node /app/dist/ilumno-docker-angular /usr/share/ngnix/html
COPY ./nginx-custom.conf /etc/ngnix/conf.d/default.conf
