# CSS Transform

## 2D Transform

CSS transform allow you to move, rotate, scale, and skew elements. Some older browsers need specific prefixes (-ms- or -webkit-) to understand the 2D transform properties. Ex.

```css
div {
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari prior 9.0 */
  transform: rotate(20deg); /* Standard syntax */
}
```

2D transformation methods:
- `translate()` moves an element from its current position (according to the parameters given for the X-axis and the Y-axis). Ex.
transform: translate(50px, 100px); //50px right & 100px down from current position

- `rotate()` rotates an element clockwise or counter-clockwise according to a given degree. Ex.
transform: rotate(20deg); //rotates element clockwise with 20 degrees
transform: rotate(-20deg); //rotates element counter-clockwise with 20 degrees

- `scaleX()` increases or decreases the width of an element. Ex. 
transform: scaleX(2); //increases width twice to its original
transform: scaleX(0.5); //decreases width half to its original

- `scaleY()` increases or decreases the height of an element. Ex. 
transform: scaleY(3); //increases height thrice to its original
transform: scaleX(0.5); //decreases height half to its original

- `scale()` increases or decreases the size of an element (according to the parameters given for the width and height). Ex. 
transform: scale(2, 3); //increases width twice & height thrice to its original

- `skewX()` skews an element along the X-axis by the given angle. Ex.
transform: skewX(20deg); //skews element 20 degrees along the X-axis

- `skewY()` skews an element along the Y-axis by the given angle. Ex.
transform: skewY(20deg); //skews element 20 degrees along the Y-axis

- `skew()` skews an element along the X and Y-axis by the given angles. Ex.
transform: skew(20deg, 10deg); //skews element 20 degrees along the X-axis, and 10 degrees along the Y-axis

- `matrix()` combines all the 2D transform methods into one. The parameters are as follows: matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY()). Ex.
transform: matrix(1, -0.3, 0, 1, 0, 0);

## 3D Transform

CSS transform property allows to use following 3D transformation methods:

- `rotateX()` rotates an element around its X-axis at a given degree. Ex.
transform: rotateX(150deg);

- `rotateY()` rotates an element around its Y-axis at a given degree. Ex.
transform: rotateY(150deg);

- `rotateZ()` rotates an element around its Z-axis at a given degree. Ex.
transform: rotateZ(150deg);
