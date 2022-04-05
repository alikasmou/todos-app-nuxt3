# Dockerfile
FROM node:17.8.0-alpine

# create destination directory
RUN mkdir -p /usr/src/todos-app-nuxt3
WORKDIR /usr/src/todos-app-nuxt3

# update and install dependencies
RUN apk update && apk upgrade
RUN apk add git

# copy the app
COPY . /usr/src/todos-app-nuxt3/
RUN npm install
RUN npm run build

EXPOSE 5000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000

CMD ["npm","start"]

##EXECUTE THIS-->docker build -t todos-app-nuxt3 .<--
##THEN -->docker run --name todosApp -p 5000:5000 todos-app-nuxt3<--