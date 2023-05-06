FROM nodejs:latest

WORKDIR /var/app

COPY package.json package-lock.json ./
RUN npm ci

COPY src ./

RUN npm start