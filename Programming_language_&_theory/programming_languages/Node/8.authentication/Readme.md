## Authentication

Basic Authentication Example:-

```js
// src/index.js

const express = require("express");
const authMiddleware = require("./auth");

const app = express();
const port = 3000;

// This middleware is where we have the
// basic authentication implementation
app.use(authMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App running @ http://localhost:${port}`);
});
```

```js
// src/auth.js
const base64 = require("base-64");

function decodeCredentials(authHeader) {
  // ...
}

module.exports = function (req, res, next) {
  // Take the header and decode credentials
  const [username, password] = decodeCredentials(
    req.headers.authorization || "",
  );

  // Verify the credentials
  if (username === "admin" && password === "admin") {
    return next();
  }

  // Respond with authenticate header on auth failure.
  res.set("WWW-Authenticate", 'Basic realm="user_pages"');
  res.status(401).send("Authentication required.");
};
```
