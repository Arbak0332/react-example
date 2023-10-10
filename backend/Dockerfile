# FROM node:18.18-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# ENV NODE_ENV development
# EXPOSE 5000
# CMD ["node", "app.js"]


FROM postgres:14.9-alpine

WORKDIR /app

ENV POSTGRES_PASSWORD .
ENV POSTGRES_USER postgres
ENV POSTGRES_DB ecommerce


COPY package.json /app

EXPOSE 5432


CMD ["npm", "run", "prepare_db"]