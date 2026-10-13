# Library & Framework

Web frameworks are designed to write web applications. Frameworks are collections of libraries that aid in the development of a software product or website. Frameworks for web application development are collections of various tools. Frameworks vary in their capabilities and functions, depending on the tasks set. They define the structure, establish the rules, and provide the development tools required.

Back in the day, before around 2010, all websites were always rendered on the server.So in `server side rendering` a website is basically assembled on the backend, on a web server, based on data and templates.The resulting HTML, CSS and JavaScript code is then sent to the client side, the web browser that requested the page.The browser then simply takes this code and basically paints it onto the screen.And a typical example of server side rendered websites are all websites built with WordPress.

```
Data + view -----> Render Webpage(HTML,CSS,JS) <----------> Browser(HTML,CSS,JS) jQuery used mostly------>Shows webpage UI
Server/Back-end                                             Client/Front-end
```

Now, the JavaScript that used to be included in these websites was initially only to add some simple dynamics to the page,like simple animations, hover effects,and other stuff like that.And usually a very popular library at the time called _jQuery_ was used for this because it made JavaScript work the exact same way across all browsers back then.

However, over time, developers started writing more and more JavaScript code to be executed by the browser,until at some point these became fully fledged web applications,which then led to the of so-called `single page applications`.So these are basically webpages that are rendered on the client, not on the server.So in client side rendering, basically the work of rendering a webpage is shifted from the server to the client.And so now we don't call these webpages anymore but web applications.
Now a web application still needs data, which usually comes from the backend in the form of an API.The application consumes this API data and renders a screen for each view of the application.And these single page applications essentially feel as if you were using a native desktop or phone application.So you can click on links or submit forms without the page ever reloading.So you're technically always on the same page and therefore the name single page app.

```
Data ---> API <----------> Browser ---> Render Webpage --->(HTML,CSS,JS)
                            View -------|
```

Server side rendering is actually making a comeback right now.So it's slowly getting modern, again,driven by frameworks that are built on top of modern client side rendering frameworks such as Next.js, Remix and many others.

_Problems with Vanilla Javascript/jQuery_ -

Any front end application is really all about handling data and then displaying that data in a nice user interface.That's basically all a web application does.It receives data,changes the data as the user uses the app and it always displays the current data on the screen.What this means is that the most important task of a single page app and really of any application and website is to keep the user interface in sync with the data, or in other words, is to make sure that the UI always displays the current state of the data.

Now, as it turns out, displaying the correct data and making sure that it stays correct over time is actually a really hard problem to solve.And to understand why that is let's take a look at this Airbnb application.First, we have list of apartment,then we have a search bar.We have some data about the filters that are being applied.And we also have this piece of data which indicates whether the search should be updated as the user removes the map.And actually in the real world Airbnb application there is just so much data.But anyway, as we know, all of this data needs to be always kept in sync with the user interface and also with the other pieces of data,because they're all kind of interconnected.
For example, when we change the data about location or dates, then the UI needs to show those new dates and also the list of apartments needs to be updated.Or another example, the map needs to show the location of the apartments.And so therefore, when the apartments change the map must also change.And the same thing should happen the other way around.So when the map is moved, the list of apartments should change as well, but only when the user has previously clicked on the green checkbox.

In a real world app,we call each of these pieces of data a piece of state.Without a framework it would be virtually impossible to keep this huge amount of data in sync with this super complex UI.With Vanilla Javascript/jQuery -

1. Requires a lots of direct DOM manipulation and traversing(imperative) i.e manual element selection, class toggling and even manipulation of text and CSS styles causing spaghetti code.
2. Data(state) such as simple text or numbers are oftentimes simply stored right in the DOM.So right in the HTML elements themselves,rather than in a central place in the application.The result is that we end up with many parts of the app accessing and changing that DOM state directly,which makes the spaghetti code even harder to understand.

To solve these problems Frameworks were introduced.

_Importance of front-end frameworks_ -

1. Frontend frameworks keeps a user interface in sync with data taking away lot of work from developers.All frameworks(Angular,React,Vite,Sveltte) achievs same goal with different approaches.
2. They enforce a correct way of structuring and writing code solving problem of spaghetti code.
3. Gives developers and teams a consistent way of building fromt-end applications.

## Server-side rendering

Server-side rendering refers to the process that the service side completes the HTML structure splicing of the page, sends it to the browser, and then binds the status and events for it to become a fully interactive page.

Visit the following resources to learn more:

- [@article@what is server side rendering](https://www.educative.io/answers/what-is-server-side-rendering)
- [@article@When should I Server-Side Render?](https://medium.com/@mbleigh/when-should-i-server-side-render-c2a383ff2d0f)
- [@article@Server-Side Rendering (SSR)](https://vuejs.org/guide/scaling-up/ssr.html)
- [@video@what is server side rendering?](https://www.youtube.com/watch?v=GQzn7XRdzxY)
- [@video@What is server-side rendering for web development?](https://www.youtube.com/watch?v=okvg3MRAPs0)
- [@feed@Explore top posts about Web Development](https://app.daily.dev/tags/webdev?ref=roadmapsh)

## Examples of libraries & framework

- _Qwik_ - Qwik is a new kind of web framework that can deliver instant loading web applications at any size or complexity. Your sites and apps can boot with about 1kb of JS (regardless of application complexity), and achieve consistent performance at scale.(https://qwik.builder.io/).

- _Svelte_ - Svelte is a javascript framework that unlike Vue and React does not use vertical DOM diffing but instead knows exactly what and where to update when the state changes. It's mainly focused on frontend and building user interfaces.
  - [Svelte Website](https://svelte.dev/)
  - [Svelte Documentation](https://svelte.dev/docs)
  - [Svelte Course Playlist for beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO)
  - [All About Svelte, the Much-Loved, State-Driven Web Framework](https://thenewstack.io/all-about-svelte-the-much-loved-state-driven-web-framework/)
  - [Svelte and the Future of Frontend Development](https://thenewstack.io/svelte-and-the-future-of-front-end-development/)

`Svelte Kit` - Svelte Kit is a framework for building web applications with the Svelte JavaScript framework. It is designed to be a complete solution for building web applications, with support for server-side rendering, automatic code splitting, and optimized performance.

- [Svelte Kit Official Website](https://kit.svelte.dev/)
- [Official Svelte Kit Docs](https://kit.svelte.dev/docs/introduction)

- _SolidJS_ - Solid is a reactive JavaScript toolkit for building user interfaces without a virtual DOM. To ensure that only the relevant code is executed when a state update occurs, it compiles templates down to real DOM nodes once and wraps modifications into fine-grained reactions.
  - [Official Website - SolidJS](https://www.solidjs.com/)
  - [SolidJS Tutorial](https://www.solidjs.com/tutorial/introduction_basics)

- _Vue.js_ - Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications. It is mainly focused on front end development.
  - [Visit Dedicated Vue Roadmap](/vue)
  - [Vue.js Website](https://vuejs.org/)
  - [Official Getting Started](https://vuejs.org/v2/guide/)
  - [Vue.js Course for Beginners](https://www.youtube.com/watch?v=FXpIoQ_rT_c)
  - [Vue.js Crash Course](https://www.youtube.com/watch?v=qZXt1Aom3Cs)
  - [Meet Vue.js, the Flexible JavaScript Framework](https://thenewstack.io/meet-vue-js-flexible-javascript-framework/)

`Pinia` - Pinia is a store library for Vue.js, and can be used in Vue 2 and Vue 3, with the same API, except in SSR and its installation. It allows state sharing between pages and components around the application. As the documentation says, it is extensible, intuitive (by organization), has devtools support (in Vue.js devtools), inferred typed state even in javascript and more. In Pinia you can access, mutate, replace, use getters that works like computed, use actions, etc. The library is recommended by the official Vue.js documentation.

- [Official Documentation](https://pinia.vuejs.org/)

- _Angular_ - Angular is a component based front-end development framework built on TypeScript which includes a collection of well-integrated libraries that include features like routing, forms management, client-server communication, and more.
  - [Visit Dedicated Angular Roadmap](/angular)
  - [Official - Getting started with Angular](https://angular.io/start)
  - [Angular for Beginners Course [Full Front End Tutorial with TypeScript]](https://www.youtube.com/watch?v=3qBXWUpoPHo)

`RxJS` - RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code.

- [RxJS Official Website](https://rxjs.dev/guide/overview)
- [RxJS Angular Docs](https://angular.io/guide/rx-library)
- [RxJS Crash Course](https://www.youtube.com/watch?v=PhggNGsSQyg)
- [RxJS Quick Start](https://www.youtube.com/watch?v=2LCo926NFLI)

- `NgRx` - NgRx is an open source library that provides reactive state management for your Angular applications

- [Official Documentation](https://ngrx.io/docs)
- [Angular NgRx Redux Quick Start Tutorial](https://www.youtube.com/watch?v=2LCo926NFLI)
- [NgRx Course](https://www.youtube.com/watch?v=nuHBHD32iw8)

- _Nuxt.js_ - Nuxt.js is a free and open source JavaScript library based on Vue.js, Node.js, Webpack and Babel.js. Nuxt is inspired by Next.js, which is a framework of similar purpose, based on React.js.
  - [@official@Nuxt Website](https://nuxtjs.org/)
  - [@official@Nuxt Docs](https://nuxtjs.org/docs/get-started/installation)
  - [@official@Nuxt Tutorials](https://nuxtjs.org/tutorials)
  - [@article@Get Started with Nuxt](https://explorers.netlify.com/learn/get-started-with-nuxt)
  - [@article@Nuxt.js Fundamentals](https://vueschool.io/courses/nuxtjs-fundamentals)
  - [@feed@Explore top posts about JavaScript](https://app.daily.dev/tags/javascript?ref=roadmapsh)

Nuxt.js is an open-source development framework built on top of Node.js
enabling Vue based web applications functionalities such as server-side
rendering and generating static websites.

Visit the following resources to learn more:

- [@official@Official Website](https://nuxtjs.org/)
- [@official@Official Docs for Getting Started](https://nuxtjs.org/docs/get-started)
- [@article@Mastering Nuxt.js](https://masteringnuxt.com/)
- [@video@Vue.js for Beginners - Full Course at freeCodeCamp YouTube Channel](https://www.youtube.com/watch?v=FXpIoQ_rT_c)
- [@feed@Explore top posts about JavaScript](https://app.daily.dev/tags/javascript?ref=roadmapsh)

- _Astro_ - Astro is an all-in-one web framework for building fast, content-focused websites. Astro combines the power of a modern component-based framework with the performance and flexibility of a static site generator.

- Component Islands: A new web architecture for building faster websites.
- Server-first API design: Move expensive hydration off of your users’ devices.
- Zero JS, by default: No JavaScript runtime overhead to slow you down.
- Edge-ready: Deploy anywhere, even a global edge runtime like Deno or Cloudflare.
- Customizable: Tailwind, MDX, and 100+ other integrations to choose from.
- UI-agnostic: Supports React, Preact, Svelte, Vue, Solid, Lit and more.

Visit the following resources to learn more:

- [@official@Official Astro Website](https://astro.build/)
- [@article@Official Astro Docs](https://docs.astro.build/)

Astro is an all-in-one web framework for building fast, content-focused websites. Astro combines the power of a modern component-based framework with the performance and flexibility of a static site generator.

- Component Islands: A new web architecture for building faster websites.
- Server-first API design: Move expensive hydration off of your users’ devices.
- Zero JS, by default: No JavaScript runtime overhead to slow you down.
- Edge-ready: Deploy anywhere, even a global edge runtime like Deno or Cloudflare.
- Customizable: Tailwind, MDX, and 100+ other integrations to choose from.
- UI-agnostic: Supports React, Preact, Svelte, Vue, Solid, Lit and more.

Visit the following resources to learn more:

- [@official@Official Astro Website](https://astro.build/)
- [@article@Official Astro Docs](https://docs.astro.build/)

- _Next.js_ - Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.

Visit the following resources to learn more:

- [@official@Official Website](https://nextjs.org/)
- [@official@Official Docs for Getting Started](https://nextjs.org/docs/getting-started)
- [@article@Mastering Next.js](https://masteringnextjs.com/)
- [@article@The Next.js Handbook — freeCodeCamp](https://www.freecodecamp.org/news/the-next-js-handbook/)
- [@video@Next.js for Beginners - freeCodeCamp](https://www.youtube.com/watch?v=KjY94sAKLlw)
- [@video@Introduction to Next.js and React by Lee Robinson](https://www.youtube.com/watch?v=h2BcitZPMn4)
- [@feed@Explore top posts about JavaScript](https://app.daily.dev/tags/javascript?ref=roadmapsh)

Next.js is an open-source development framework built on top of Node.js
enabling React based web applications functionalities such as server-side
rendering and generating static websites.

- [@official@Official Website](https://nextjs.org/)
- [@official@Official Docs for Getting Started](https://nextjs.org/docs/getting-started)
- [@article@The Next.js Handbook — FreeCodeCamp](https://www.freecodecamp.org/news/the-next-js-handbook/)
- [@article@Mastering Next.js](https://masteringnextjs.com/)
- [@video@Next.js for Beginners - Full Course at freeCodeCamp YouTube Channel](https://youtu.be/1WmNXEVia8I)
- [@feed@Explore top posts about JavaScript](https://app.daily.dev/tags/javascript?ref=roadmapsh)

- _React_ - React is the most popular front-end JavaScript library for building user interfaces. React can also render on the server using Node and power mobile apps using React Native.

Visit the following resources to learn more:

- [@roadmap@Visit Dedicated React Roadmap](/react)
- [@official@React Website](https://react.dev)
- [@official@Official Getting Started](https://react.dev/learn/tutorial-tic-tac-toe)
- [@video@React JS Course for Beginners](https://www.youtube.com/watch?v=nTeuhbP7wdE)
- [@video@React Course - Beginners Tutorial for React JavaScript Library \[2022\]](https://www.youtube.com/watch?v=bMknfKXIFA8)
- [@video@Understanding Reacts UI Rendering Process](https://www.youtube.com/watch?v=i793Qm6kv3U)
- [@feed@Explore top posts about React](https://app.daily.dev/tags/react?ref=roadmapsh)

- _Remix_ - Remix is a full stack web framework built on top of react that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.

- [@official@Official Website](https://remix.run/)
- [@official@Official Docs for Getting Started](https://remix.run/docs/en/v1#getting-started)
