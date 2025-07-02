# Template Engines

Template engine helps us to create an HTML template with minimal code. Also, it can inject data into HTML template at client side and produce the final HTML.

Some examples of template engines in Node.js are:

- Nunjucks
- Jade
- Vash
- EJS
- Handlebars
- HAML

## Template Engines

Template engine helps us to create an HTML template with minimal code. Also, it can inject data into HTML template at client side and produce the final HTML.

Some examples of template engines in Node.js are:

- Nunjucks
- Jade
- Vash
- EJS
- Handlebars
- HAML

## Marko

Marko is a fast and lightweight HTML-based templating engine that compiles templates to CommonJS modules and supports streaming, async rendering, and custom tags. It is HTML re-imagined as a language for building dynamic and reactive user interfaces.

## Pug

Pug is a JavaScript template engine. It is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers. Pug was formerly called Jade.

Pug is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers

## EJS

EJS is a templating language or engine that allows you to generate HTML markup with pure JavaScript. And this is what makes it perfect for Nodejs applications.
In simple words, the EJS template engine helps to easily embed JavaScript into your HTML template.


```js
app.set('view engine', 'pug');
app.set('views', './views');//default.

app.get('/',(req,res) =>{
   res.render('view-name',{ body });
})
```
