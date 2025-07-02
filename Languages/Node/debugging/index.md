# More Debugging

Debugging is a concept to identify and remove errors from software applications. Here, we will learn about the technique to debug a Node.js application.

## Why not to use console.log() for debugging?

Using `console.log` to debug the code generally dives into an infinite loop of “stopping the app and adding a console.log, and start the app again” operations. Besides slowing down the development of the app, it also makes the writing dirty and creates unnecessary code. Finally, trying to log out variables alongside with the noise of other potential logging operations, may make the process of debugging difficult when attempting to find the values you are debugging.


## Node Inspect

Node.js provides a built-in DevTools-based debugger to allow debugging Node.js applications.

## Using APM

As much fun as it is to intercept your container requests with inspect and step through your code, you won’t have this option in production. This is why it makes a lot of sense to try and debug your application locally in the same way as you would in production.

In production, one of your tools would be to login to your remote server to view the console logs, just as you would on local. But this can be a tedious approach. Luckily, there are tools out there that perform what is called log aggregation, such as Stackify.

These tools send your logs from your running application into a single location. They often come with high-powered search and query utilities so that you can easily parse your logs and visualize them.
