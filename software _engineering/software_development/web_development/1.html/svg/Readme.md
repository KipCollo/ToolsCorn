# Scalable Vector Graphics (SVG)

SVG stands for scalable vector graphics. It is an XML-based format that supports animation and interactivity.
In other words, SVG is a technology that allows us to create graphics by writing a code. Moreover, it is scalable. While non-vector graphics like PNG and JPEG have fixed sizes and cannot be scaled without loosing quality, SVG can be mathematically scaled to any size.

We can use ".svg" file in our code by setting it as an image source just like any other image "< img src='say_hello.svg'>". But it's not so interesting.
One of the greatest things about SVG is that it is actually text file in XML format. So we can open it, read it and interact with it. We can take our SVG code, put in DOM and play with it - change elements parameters like position, background color or font family using JavaScript and CSS. Moreover, each element of SVG can be animated. And it's really awesome.

So, basically, we should always use SVG graphics instead of PNG or JPEG, when we are talking about basic shapes, logos and vector graphic.

Here's a simple red circle SVG

```css
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="red" />
</svg>
```

_Common element parameters_ - Usually graphs starts (x,y = 0) from bottom left corner. In SVG start point is top left corner.
Each SVG shape (element) has some basic parameters:

- X - X coordinate of top left corner of the element
- Y - Y coordinate of top left corner of the element
- Fill - element background color.
- Fill-opacity - opacity of background color
- Stroke - element border color.
- Stroke-width - element border size.

_Pros:_

- Resolution independent: Scalability without changing the image quality. It is widely used for devices with screens Retina and those close to them.
- Small size. SVG image elements take up much less space than their twins created in raster format.
- Flexibility. With CSS, you can quickly change the graphics settings on the site, such as background color or the position of the logo on the page. To do this, you can edit the file in any text editor.
- It’s possible to view the contents of the SVG file in any browser (IE, Chrome, Opera, FireFox, Safari, etc.).
- No unnecessary HTTP requests, unlike using an img tag
- SEO friendly: text labels, descriptions can be searched by search engines.
- We have scripting control for custom interactive events and animation.

_Cons:_

- The file size is growing very fast, if the object consists of a large number of small elements.
- It’s impossible to read a part of the graphic object, only the entire object and it slows you down.
