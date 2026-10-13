# Responsive Web Design

Responsive Web Designing is the technique to make your webpages look good on all screen sizes. There are certain techniques used to achieve that e.g. CSS media queries, percentage widths, min or max widths heights etc.

Visit the following resources to learn more:

- [Responsive Web Design](https://www.w3schools.com/css/css_rwd_intro.asp)
- [Learn Responsive Design](https://web.dev/learn/design/)
- [The Beginner’s Guide to Responsive Web Design](https://kinsta.com/blog/responsive-web-design/)
- [The guide to responsive web design in 2022](https://webflow.com/blog/responsive-web-design)
- [5 simple tips to making responsive layouts the easy way](https://www.youtube.com/watch?v=VQraviuwbzU)
- [Introduction To Responsive Web Design](https://www.youtube.com/watch?v=srvUrASNj0s)

# Media Queries

Media queries allow one to apply CSS rules based on the type of device / media (e.g. screen, print or handheld) called media type, additional aspects of the device are described with media features such as the availability of color or viewport dimensions.

`Width vs Viewport`: When we are using "width" with media queries it is important to set the meta tag correctly. Basic meta tag looks like this and it needs to be put inside the <head> tag.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

The width media feature describes the width of the rendering surface of the output device (such as the width of the document window, or the width of the page box on a printer).
View-port is the width of the device itself. If your screen resolution says the resolution is 1280 x 720, your view-port width is "1280px".
More often many devices allocate diﬀerent pixel amount to display one pixel. For an example iPhone 6 Plus has 1242 x 2208 resolution. But the actual viewport-width and viewport-height is 414 x 736. That means 3 pixels are used to create 1 pixel.
But if you did not set the meta tag correctly it will try to show your webpage with its native resolution which results in a zoomed out view (smaller texts and images).

General Structure of a Media Query:

```css
@media [...] {
  /* One or more CSS rules to apply when the query is satisfied */
}
```

A Media Query containing a Media Type and a Media Feature

```css
@media screen and (max-width: 600px) {
  /* One or more CSS rules to apply when the query is satisfied */
}
```

A Media Query containing a Media Feature (and an implicit Media Type of "all")

```css
@media (orientation: portrait) {
  /* One or more CSS rules to apply when the query is satisfied */
}
```

```css
@media screen and (min-width: 720px) {
  body {
    background-color: skyblue;
  }
}
```

The above media query speciﬁes two conditions:

1. The page must be viewed on a normal screen (not a printed page, projector, etc).
2. The width of the user's view port must be at least 720 pixels.

If these conditions are met, the styles inside the media query will be active, and the background color of the page will be sky blue.

Media queries are applied dynamically. If on page load the conditions speciﬁed in the media query are met, the CSS will be applied, but will be immediately disabled should the conditions cease to be met. Conversely, if the conditions are initially not met, the CSS will not be applied until the speciﬁed conditions are met.

## mediatype

Media queries have an optional mediatype parameter. This parameter is placed directly after the @media declaration (@media mediatype), for example:

```css
@media print {
  html {
    background-color: white;
  }
}
```

The mediatype parameter has an optional not or only preﬁx that will apply the styles to everything except the speciﬁed mediatype or only the speciﬁed media type, respectively.
The list of mediatype can be understood better with the following table:

1.  allApply to all devices
2.  screenDefault computers
3.  printPrinters in general. Used to style print-versions of websites
4.  handheldPDA's, cellphones and hand-held devices with a small screen
5.  projection For projected presentation, for example projectors
6.  auralSpeech Systems
7.  brailleBraille tactile devices
8.  embossedPaged braille printers
9.  tvTelevision-type devices
10. ttyDevices with a ﬁxed-pitch character grid. Terminals, portables.

`Using Media Queries to Target Dierent Screen Sizes`:- Often times, responsive web design involves media queries, which are CSS blocks that are only executed if a
condition is satisﬁed. This is useful for responsive web design because you can use media queries to specify diﬀerent CSS styles for the mobile version of your website versus the desktop version.

```css
@media only screen and (min-width: 300px) and (max-width: 767px) {
  .site-title {
    font-size: 80%;
  }
  /* Styles in this block are only applied if the screen size is atleast 300px wide, but no more
than 767px */
}
```
