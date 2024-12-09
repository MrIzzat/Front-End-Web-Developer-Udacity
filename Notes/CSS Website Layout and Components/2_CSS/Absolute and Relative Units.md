The most common unit of measurements used in CSS are the pixel `px` and `em`. There are two main types of units of measurement.


# Absolute

Absolute measurements are units that fixed regardless of other factors relating to the webpage, such as screen size, browser size etc. Most font sizes on the internet are set between 12px - 30px. A font size set to 16px will be the same size no matter the size of the screen it is being rendered on.

Examples of absolute measurements:

* `px`
* `in`
* `mm`
* `cm`

# Relative

Relative measurements are units based on dynamic values, such as browser window size. They can be used when the size of an element need to be adjusted depending on certain factors relating to the screen.

Examples of relativem measurements:

* `%` percentage of something
* `em` a unit relative to the current established font size, if the current font is 12px, 2em would mean 24px
* `vw` are units of viewport width (the size of the browser's screen). 1vw is 1/100th of the width.
* `vh` is the same as `vw` except for height.

A use case of `em`:

```css
body{
    font-size: 16px;
}

#one {
    font-size: 1.5em;
}

#two{
    font-size: 0.5em;
}
```

Because the font size of the body is 16px, the font size of `#one` is going to be 24px and the size of `#two` is 8px.