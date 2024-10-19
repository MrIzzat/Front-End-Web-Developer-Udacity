There are two main axes the flexbox model relies on, the main and cross axes. The main axis is defined by the `flex-direction` property. It can be four possible values:

* `row`
* `row-reverse`
* `column`
* `column-reverse`

The two row values will make the main axis horizontal, otherwise known as `inline` direction. The two column values will make the main axis vertical, otherwise known as the `block` direciton.

The cross axis direction is perpindicular to the main axis, if the main axis is vertical then the cross axis is horizontal and vice versa. The cross axis is used for aligning items (`align-items` property) and for justifying the content (`justify-content` property for the spacing of items.)