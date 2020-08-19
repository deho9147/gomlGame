FROM node:alpine
WORKDIR '/app'

COPY package.json /app
RUN npm install

ENV PORT 8080
ENV HOST 0.0.0.0

COPY . /app
CMD ["npm","start","build"]
