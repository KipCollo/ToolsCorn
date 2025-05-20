# Examples

Images:-

NODE:-

```Dockerfile
FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "app.js"]
```

REACT:-

```Dockerfile
FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

When running the React app container use -it flag.The code runs in the browser,not in the container.

PYTHON:-

```Dockerfile
FROM python

WORKDIR /app

COPY . .

CMD ["python", "app.py"]
```
