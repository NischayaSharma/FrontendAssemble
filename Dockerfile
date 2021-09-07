FROM node:14
WORKDIR /app
COPY package*.json /app/
RUN npm install -g @ionic/cli
RUN npm install
COPY ./ /app/
ENTRYPOINT ionic serve --livereload --external --lab --lab-host=0.0.0.0 --lab-port=8200
