# Authentication ands Authorization

The client sends Password and username to the server.The server checks if it's correct and responds with JWT token which contains some attributes about logged in user.We use it to identify user on client and on the server.Attributes can include their username,password,whether they are admin etc.

The JWT on the client is stored in persistent storage so that it can exist across session restarts i.e if user closes the browser and opens again,the token should still be there.The persistence used is Local storage provided by the browser.

On the client,JWT token:-

1. can be used to user and display the current user's name on navigation bar.
2. Can be used to show or hide parts of a page.
3. Prevents access to certain routes
