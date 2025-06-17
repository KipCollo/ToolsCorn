const express = require('express');

const custom =require("./custom")
const app = express();

//To access custom middleware, you import it and then place it in the use function.
app.use(custom)

// express.static()
//You specify the path to static folder i.e public
//To access the static file directly you specify it in the url http://localhost:3000/index.html
app.use(express.static(public))