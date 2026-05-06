# Configurations

Package for managing environments:-

1. rc
2. config

```json
//default
{
   "name" : "default"
}
```

```json
//Development
{
   "name" : "Development"
}
```

```json
//Production
{
   "name" : "Production"
}
```

```js
const config = require('config')
```

## Environments

To check Current environments:-

```js
process.env.NODE_ENV
app.get('env')
```

```js
if (app.get('env') === 'development'){
   app.use(morgan('tiny'));
}
```

## Environment variables

To read the environment variables we use the `process` object.

1. PORT

To make environment variables:-

- Linux,Mac -- export PORT = 5000
- Windows -- use PORT = 5000

```js
process.env.PORT
```

## Secrets
