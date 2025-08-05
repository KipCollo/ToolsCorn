# HTML Tables

The HTML <table> element allows web authors to display tabular data (such as text, images, links, other tables,etc.) in a two dimensional table with rows and columns of cells.

A table is divided into rows with the <tr> tag, and each row is divided into data cells using the <td> tag. The letters td stand for “table data,” which is the content of
a data cell. A data cell can contain text, images, lists, paragraphs, forms, horizontal rules, tables, and so on.

A basic table includes the following tags:

1. Each table starts with a table tag.
2. Each table row starts with a tr tag.
3. Each table data (cell) starts with a td tag.

`Headings in a Table`:- Table headings are defined with the <th> tag.

```html
<table border="1">
<tr>
   <th>Heading</th>
   <th>Another Heading</th>
</tr>
<tr>
   <td>row 1, cell 1</td>
   <td>row 1, cell 2</td>
</tr>
<tr>
   <td>row 2, cell 1</td>
   <td>row 2, cell 2</td>
</tr>
</table>
```
