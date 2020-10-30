FROM nginx:alpine

EXPOSE 9000

RUN apk add --update nodejs yarn

RUN mkdir app

WORKDIR app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY . .

RUN yarn build

RUN rm -rf /usr/share/nginx/html

RUN mv dist /usr/share/nginx/html

COPY config/default.conf.template /etc/nginx/nginx.d/default.conf