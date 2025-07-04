FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]