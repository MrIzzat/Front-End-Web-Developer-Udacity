In addition to x and y axeses, HTML elements have a z axis. When elements overlap, they have the same z index. Using CSS, the z index of an element can be specified to make it overlap or underlap others. The element with the higher z index overlaps the element with the lower z index.

Elements can overlap for many reasons. Elements positioned abosolutely can overlap. Elements with negative values set for their `margin` property  can also overlap. The way a webpage determines which element should be placed above the other element in this case without specifying the `z-index` is by placing the last element written in to the DOM on top of all others.

For example, for two rectangles positioned absolutely and top of eacher other:


```html
<style>
.box {
    width: 200px;
    height: 200px;
    position: absolute;
}

#one {
    background: red;
    top: 100px;
    left: 150px;
}

#two {
    background: yellow;
    top: 80px;
    left: 100px;
}

</style>

<html>
    <div id="one" class="box">Box One</div>
    <div id="two" class="box">Box two</div>
</html>
```

By default, box two will appear over box one, since it's the last element entered into the DOM (comes after box one is in the code). Box one can be set to display over box two by setting it's `z-index` to be higher than box two. The CSS would look like this:

```css
#one {
    background: red;
    top: 100px;
    left: 150px;
    z-index: 1;
}

#two {
    background: yellow;
    top: 80px;
    left: 100px;
    z-index: -1;
}
```

Check out the exercise in `index.html`