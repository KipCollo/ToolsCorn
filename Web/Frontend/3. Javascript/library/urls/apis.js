
fetch('https://jsonplaceholder.typicode.com/')
.then(response => response.text())
.then(data => console.log(data));