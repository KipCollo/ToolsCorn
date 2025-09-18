# Tailwind CSS

CSS Framework that provides atomic CSS classes to help you style components e.g. `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup.

Tailwind CSS works by scanning all of your HTML files,Javascript components and any other templates for class names,generating the corresponding styles and then writing them to a static CSS file.
It's fast,flexible and reliable- with zero-runtime.

## Installation

**Tailwind CLI:**- The CLI is available as a standalone executable if you want to use it without installing Node.js.

- `Install Tailwind CSS`: Install tailwindcss via npm, and create your tailwind.config.js file.

```bash
npm install -D tailwindcss
npx tailwindcss init
```

- `Configure template paths`: Add the paths to all of your template files in your tailwind.config.js file.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      extend: {},
   },
   plugins: [],
}
```

- `Add the Tailwind directive to CSS`: Add the @tailwind directives for each of Tailwind's layers to your main CSS file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- `Build process`: Run the CLI to scan ypur template files for classes and build your CSS.

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

- `Tailwind in your HTML`: Add your compiled CSS to <head> and start using Tailwind's utility classes to style your content.

```html
<head>
   <link href="./output.css" rel="stylesheet">
</head>
```
