**Media Queries** are expressions that can be added to code that modify the website based on the characteristics of the device that it is being viewed on.


When the same website is being displayed on many devices with different size screens, it's important to take into account how these different devices will display the website differently.


Media Queries with break points can be used to display the website differently depending on the screen size. They basically set a minimum screen area which is needed to display certain CSS rules.


*Though media queries can be used for many other things.*

A **viewport** is a the area of the window that web content can be seen. Usually the width of the viewport is used for the media queries but the height can be used as well. 

The syntax for a media query is:

```css
@media(feature:value)
```
An example usage:

```css
@media(min-wdith: 900px){
    body{
        background: red;
    }
}
```

This means if the width of the screen is bigger than 900px, set the background color of body to red.

In addtion to `min-`, `max-` can be used as well.


Another example:

```css
@media(min-width:1100px){
    body{
        font-size: 27px;
    }
}
```
This means if the width of the screen is bigger than 1100px, set the font size of content inside of body to 27px;


Multiple media queries can be used to handle more than one screen size:

```css
.container{
    ....
}

@media(min-width:600px) and (max-width:900px){
    .container{
        .....
    }
}

@media (min-width:901px){
    .container{
        ......
    }
}
```

The first container rule will handle any screen size that does not fall under the other media queries, in this case being anything below 600px. The second container rule will handle screen sizes between 600px and 900px. The final container rule will handle any file size greater than 900px.