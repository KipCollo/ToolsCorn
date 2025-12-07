# Routes

## Route parameters

```js
app.get('/api/users/:id', (req,res) => {
   req.params.id //get id parameter
})


app.get('/api/:year/:month', (req,res) => {
   req.params//gets all parameters
})
```


## Query String params

Provides additional data for backend services.

```js
app.get('/api/users/:id', (req,res) => {
   req.query
})

//http://localhost:300/api/users/2?sortBy = name
```
