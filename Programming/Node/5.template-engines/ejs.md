# EJS(Embedded Javascript)

EJS is a templating language or engine that allows you to generate HTML markup with pure JavaScript. And this is what makes it perfect for Nodejs applications.
In simple words, the EJS template engine helps to easily embed JavaScript into your HTML template.


```js
app.post("/",(req,res) =>{
   res.render("index.js",
      {name: req.body["name"]}
   )
})
```

```ejs
<body>
 <h1>
  Hello <%= name %>
</h1>
</body>
```
