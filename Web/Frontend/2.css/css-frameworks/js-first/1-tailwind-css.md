# Tailwind CSS

CSS Framework that provides atomic CSS classes to help you style components e.g. `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup.
Tailwind CSS is popular utility-first CSS framework that provides a collection of pre-defined classes for building user interfaces efficiently.Instead of writing custom CSS for every design element,Tailwind offers utilities that can be directly applied to HTML elements,which helps in creating fast and responsible designs.

Tailwind CSS works by scanning all of your HTML files,Javascript components and any other templates for class names,generating the corresponding styles and then writing them to a static CSS file.
It's fast,flexible and reliable- with zero-runtime.

Features of Tailwind CSS:-
1. Utility-First Approach - Tailwind provides small,single-purpose utility classes(e.g text-center,mt-4,bg-blue-500) that can composed to build any design without writing custom CSS.
2. Responsive Design - Tailwind allows developers to easily build responsive designs using breakpoints like sm,md,lg,xl and 2xl.These breakpoints follow a mobile-first approach.
3. Customizability - Tailwind comes with a default configuration but can be fully customized through its configuration file(tailwind.config.css).You can define custom colors,spacing,fonts and even extend default theme.
4. Dark mode support - Tailwind includes built-in support for dark mode.You can use the dark modifier to adjust your styles for dark themes.
5. JIT compilation - Tailwind's JIT mode generates only necessary CSS,making builds faster and keeping file sizes smaller.It enables you to use arbitrary values(bg-[#1da1f2]) and utilities not present in default configuration.

## Installation $ SetUp

**Tailwind CLI:**- The CLI is available as a standalone executable if you want to use it without installing Node.js.

- `Install Tailwind CSS`: Install tailwindcss via npm, and create your tailwind.config.js file.

```bash
npm install tailwindcss -g
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

## Core concepts

`Utility classes`:-These are single-purpose classes for styling specific CSS properties.E.g text-center centers text,p-4 adds padding.
`Variants`:- Tailwind allows you to modify styles based on states(like hover,focus) and breakpoints(e.g mobile,desktop).These are called variants.
`Arbitrary Values`:- You can pass arbitrary values using square brackets,allowing you to use specific pixel sizes,custom colors or any valid CSS value.
`Component Extraction`:- Although utility-first,you can extract commonly used uility classes into reusable components using @apply directive.
`purgeCSS`:- tailwind comes with built-in purgeCSS integration.In production,it removes any unused CSS classes to keep the final CSS file small.In tailwind.,config.js,you specify which files to scan.

**Tailwind plugins**:-Tailwind has a plugin system that allows extending its functionality.Some includes:-
1. @tailwindcss/forms: Styles form elements.
2. @tailwindcss/typography: Prose formatting for rich text content.
3. @tailwindcss/aspect-ratio: Provides utilities to manage aspect ratios.
