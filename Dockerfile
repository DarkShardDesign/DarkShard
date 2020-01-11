FROM node:10
COPY ./DarkShard/dist ./site
COPY ./DarkShard/package.json ./package.json
RUN npm install --only=prod
CMD [ "node", "site/server.js"]