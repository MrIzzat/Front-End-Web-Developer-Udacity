Colors in CSS can be set through the following methods:

* Hexadecimal Colors
* RGB Colors
* Predefined cross browser color names
* RGBA colors
* HSL colors
* HSLA colors

The first three are the most common ways of defining colors.

# Hexadecimal Colors

A hexadecimal color is specified as follows `#RRGGBB`. Where `RR` is red, `GG` is green and `BB` is blue. All value must be between 00 an FF hexadecimal. The higher the value, the closer it is to the specifed color. The lower the value, the farther away the color. `#FFFFFF` represents white and `#000000` represents black. `#0000FF` represents blue.

An Examples:

```css
#p1 {
    background-color: #ff0000;
}

#p2 {
    background-color: #00ff00;
}

#p3 {
    background-color: #0000ff;
}

```

p1 has a red background color, p2 has a green background color and p3 has blue background color

# RGB Colors

A RGB color value is specified through the `rgb()` function, it has the following syntax:

`rgb( red, green blue)`

Each parameter is a numeric value from 0-255 or a percentage from 0-100%. The larger the value, the higher the intensity of that color. `rgb(0,0,255)` would be blue. `rgb(0%,0%,100%)` would also display blue.

An example:

```css
#p1 {
    background-color: rgb(255,0,0);
}

#p2 {
    background-color: rgb(0,255,0);
}

#p3 {
    background-color: (rgb(0,0,255));
}
```

p1 would have a red background, p2 would have a green background and p3 would have a blue background.

# Predefined Cross Browser Color Names

There are 140 predefined colors in HTML and CSS, they can be found [here]("https://developer.mozilla.org/en-US/docs/Web/CSS/named-color").