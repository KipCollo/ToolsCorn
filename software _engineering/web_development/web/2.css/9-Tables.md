# CSS Tables

The CSS table module helps you define how to lay out table data.

This CSS module defines styles applicable to the HTML <table> element, which is used to render tabular data. By default, tables are rendered as a two-dimensional grid with cells lined up in a series of consecutive rows and columns. This layout is generated from the table structure and sized according to the content of the cells. This module also enables defining the position of the table's <caption>, if present.

The properties introduced in this module aren't limited to the <table> elements; they can be applied to any element with a table-related CSS display value.

HTML tables can be greatly improved with CSS.
- border specifies the table borders. Eg. border: 1px solid black;
- border-collapse sets whether the table borders should be collapsed into a single border. Eg. border-collapse: collapse; border-collapse: separate;
- empty-cells sets whether or not to display borders on empty cells in a table. Eg. empty-cells: hide;
- caption-side specifies the placement of a table caption.Eg. caption-side: bottom; caption-side: top;
- border-spacing sets the distance between the borders of adjacent cells. Eg. border-spacing: 15px 50px;
- Width and height of a table are defined by the width and height properties.
- text-align sets the horizontal alignment of the content in <th> or <td>.
- vertical-align sets the vertical alignment of the content in <th> or <td>.
- padding controls the space between the border and the content in<td> or <th>.
- border-bottom can be added to <th> and <td> for horizontal dividers.
- :hover selector on <tr> can highlight table rows on mouse over.
- nth-child() selector and background-color on all even (or odd) table rows, for zebra-striped tables.
- overflow-x: auto around the <table> element can make it responsive.

`CSS Table Borders` - The CSS border property is the best way to define the borders for the tables.
- The border property is a shorthand property for:
    - border-width - sets the width of the border
    - border-style - sets the style of the border (required)
    - border-color - sets the color of the border

```css
table, th, td{
    border: 1px solid black;
}
```

Notice that the tables have double borders. This is because both the <table>, <th>, and <td> elements have separate borders.


`CSS Collapse Table Borders`:- The CSS border-collapse property sets whether table borders should collapse into a single border or be separated as in standard HTML.

- This property can have one of the following values:
    - separate - Default value. Borders are separated; each cell will display its own borders
    - collapse - Borders are collapsed into a single border when possible

```css
table {
  border-collapse: collapse;
}
```

`CSS Table Padding` - To control the space between the border and the content in a table, use the padding property on <td> and <th> elements:

```css
th, td {
  padding: 8px;
}
```

`CSS Border Spacing` - The CSS border-spacing property sets the distance between the borders of adjacent cells.
Note: This property works only when border-collapse is set to "separate".

```css
table {
  border-collapse: separate;
  border-spacing: 15px;
}
```

`CSS Outside Table Borders` - If you just want a border around the table (not inside), you specify the border property only for the <table> element:

```css
table {
  border: 1px solid;
}
```

