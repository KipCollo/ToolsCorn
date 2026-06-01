# Fetch

Fetch is a function used for making HTTP requests to fetch resources.
It simplifies asynchronous data fetching in Javascript and used for intercating with APIs to retrieve and send data asynchronously over the web.

Sytax:-

```js
fetch(uri, {options})
```

```js
// get some data from stackoverflow
fetch("https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow")
   .then(resp => resp.json())
   .then(json => console.log(json))
   .catch(err => console.log(err));
```

```js
fetchData();
async function fetchData(){
   try{
      const response = await fetch("https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow")
      const data = await response.json()

   } catch(error){
      //
   }
}