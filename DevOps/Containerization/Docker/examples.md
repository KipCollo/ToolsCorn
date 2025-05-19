# Examples

Images:-

NODE:-

```Dockerfile
FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
```

PYTHON:_

```Dockerfile
FROM python:latest

WORKDIR /app

COPY . .

CMD ["python", "app.py"]
```
