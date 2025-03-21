FROM node:18.19.0

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 3000

CMD [ "npm", "run", "preview" ]
