# template literal

Template literals are string literals allowing embedded expressions. They are enclosed by backticks (`) and can contain placeholders indicated by ${expression}.

Template literals are a type of string literal that allows values to be interpolated, and optionally the interpolation and construction behaviour to be controlled using a "tag" function.

In ES6 and later, string literals can be delimited with backticks:-

```js
let s = `hello world`;
```

The final value of a string literal in backticks is computed by evaluating any included expressions, converting the values of those expressions to strings and combining those computed strings with the literal characters within the backticks:

```js
let name = "Bill";
let greeting = `Hello ${ name }.`;// greeting == "Hello Bill."
```

Everything between the ${ and the matching } is interpreted as a JavaScript expression. Everything outside the curly braces is normal string literal text. The expression inside the braces is evaluated and then converted to a string and inserted into the template, replacing the dollar sign, the curly braces, and everything in between them.
A template literal may include any number of expressions. It can use any of the escape characters that normal strings can, and it can span any number of lines, with no special escaping required. The following template literal includes four JavaScript expressions, a Unicode escape sequence, and at least four newlines (the expression values may include newlines as well):

```js
let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`;
```

The backslash at the end of the first line here escapes the initial newline so that the resulting string begins with the Unicode ✘ character (\u2718) rather than a newline.

A typical use of Javascript is to either generate HTML,modify existing HTML or remove HTML from a live document in the browser.
It is an interactive layer on top of the content,the HTML and its presentation,the CSS.We can use Javascript to manipulate the CSS and HTML to get browser to do what we want.

The basic is to use js to inject new HTML content into the document.The entire document is an object in the browser.
When a browser renders a document, it creates a document object model of that document.We can then access that document object using javascript.

```js
class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    this.dateAcquired = dateAcquired;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);


const content = `
    <main>
      <article>
        <h1>${everydayPack.name}</h1>
        <ul>
          <li>Volume: ${everydayPack.volume}</li>
          <li>Color: ${everydayPack.color}</li>
          <li>Age: ${everydayPack.backpackAge()}</li>
          <li>Number of pockets: ${everydayPack.pocketNum}</li>
          <li>Left strap length: ${everydayPack.strapLength.left}</li>
          <li>Right strap length: ${everydayPack.strapLength.right}</li>
          <li>Lid status: ${everydayPack.lidOpen}</li>
        </ul>
      </article>
    </main>
`

document.body.innerHTML= content;

```

`Traditional String`:- Using plain old Javascript string.

```js
const content = "<h1>" + everydayPack.name + "</h1>"
document.body.innerHTML= content;
```
