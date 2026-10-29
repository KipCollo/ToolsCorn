# Web Performance

- Critical Rendering Path
- Time To Interact(TTI)
- First Contentful Paint(FCP)
- Lazy Loading
- Code Splitting
- Tree Shaking
- Minification and Bunling
- Debouncing and Throttling
- Reflow and Repaint
- Cumulative Layout Shift(CLS)

## Basics of SEO

SEO or Search Engine Optimization is the technique used to optimize your website for better rankings on search engines such as Google, Bing etc.

Visit the following resources to learn more:

- [@article@Google Search Central — SEO Docs](https://developers.google.com/search/docs)
- [@opensource@SEO Guide](https://github.com/seo/guide)
- [@article@8 Must-Know SEO Best Practices For Developers](https://neilpatel.com/blog/seo-developers/)
- [@article@SEO for Developers](https://medium.com/welldone-software/seo-for-developers-a-quick-overview-5b5b7ce34679)
- [@video@Complete SEO Course for Beginners](https://www.youtube.com/watch?v=xsVTqzratPs)
- [@video@SEO Expert Course](https://www.youtube.com/watch?v=SnxeXZpZkI0)
- [@article@Learning SEO](https://learningseo.io/)
- [@feed@Explore top posts about SEO](https://app.daily.dev/tags/seo?ref=roadmapsh)

# Performance Metrics

Web performance metrics are quantitative measures of the performance of a web page or application. They are used to assess the speed and efficiency of a web page, and they can help identify areas for improvement. Some common web performance metrics include:

- Load time: The time it takes for a web page to fully load and become interactive.
- First contentful paint (FCP): The time it takes for the first content to appear on the page.
- Time to interactive (TTI): The time it takes for the page to become fully interactive.
- First input delay (FID): The time it takes for the page to respond to the first user input.
- Total blocking time (TBT): The time it takes for the page to become fully interactive, taking into account the time spent blocking the main thread.

There are many tools and techniques available for measuring web performance metrics, including browser dev tools, performance monitoring tools, and web performance APIs. By tracking these metrics and analyzing the results, web developers can identify areas for improvement and optimize the performance of their web pages.

Visit the following resources to learn more:

- [@article@Web Performance Metrics - Google Developers](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics)
- [@article@Measuring performance and user experience - Google Developers](https://web.dev/metrics/)
- [@article@Measuring performance and user experience - MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/Performance)
- [@feed@Explore top posts about Performance](https://app.daily.dev/tags/performance?ref=roadmapsh)

## RAIL Model

The RAIL model is a performance optimization model for web applications that focuses on improving the perceived performance of a web page. It stands for Response, Animation, Idle, and Load, and it involves the following four performance goals:

- Response: The time it takes for the web page to respond to user input should be under 100 milliseconds.
- Animation: The time it takes for an animation to run should be under 10 milliseconds.
- Idle: The web page should take advantage of idle time to perform non-critical tasks.
- Load: The time it takes for the web page to fully load should be under 1 second.

The RAIL model is designed to provide a framework for optimizing the performance of a web page by focusing on the four key areas that impact the user's perception of performance. It is particularly useful for applications that require high levels of interactivity, such as games and social media applications.

Visit the following resources to learn more:

- [@article@RAIL Model - Google Developers](https://developers.google.com/web/fundamentals/performance/rail)

## Lighthouse

Lighthouse is an open-source tool developed by Google that is used to audit the performance, accessibility, and SEO of web pages. It is available as a browser extension and as a command-line tool, and it can be run on any web page to generate a report with recommendations for improvement.

Lighthouse works by simulating the load and interaction of a web page and measuring various performance metrics, such as load time, time to first paint, and time to interactive. It also checks for common issues such as incorrect image sizes, missing alt text, and broken links.

Lighthouse provides a comprehensive and easy-to-use tool for identifying and fixing performance and accessibility issues on web pages. It is widely used by web developers and is integrated into many popular development tools.

Visit the following resources to learn more:

- [@article@Lighthouse - Google Developers](https://developers.google.com/web/tools/lighthouse)
- [@video@Improving Load Performance - Chrome DevTools 101](https://www.youtube.com/watch?v=5fLW5Q5ODiE)
- [@feed@Explore top posts about Lighthouse](https://app.daily.dev/tags/lighthouse?ref=roadmapsh)

## PRPL Pattern

The PRPL pattern is a performance optimization pattern for web applications that focuses on minimizing the time it takes for the initial rendering of a web page. It stands for Push, Render, Pre-cache, and Lazy-load, and it involves the following steps:

- Push: Prioritize the delivery of critical resources, such as HTML, CSS, and JavaScript, to the client as early as possible.
- Render: Start rendering the web page as soon as the critical resources are received, even if some non-critical resources are still being downloaded.
- Pre-cache: Pre-cache non-critical resources in the background so that they are available when needed.
- Lazy-load: Defer the loading of non-critical resources until they are needed, such as when the user scrolls to them or interacts with them.

The PRPL pattern is designed to improve the perceived performance of a web page by reducing the time it takes for the page to become interactive. It is particularly useful for applications that are served over slow or unreliable networks, as it allows the page to render as quickly as possible and then gradually load the remaining resources.

Visit the following resources to learn more:

- [@article@PRPL Pattern - Google Developers](https://developers.google.com/web/fundamentals/performance/prpl-pattern)
