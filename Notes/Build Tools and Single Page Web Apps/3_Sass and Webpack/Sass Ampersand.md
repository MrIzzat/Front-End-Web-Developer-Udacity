Ampersand `&` in Sass bascially contains the name of the parent. The parent does not need to be rewritten everytime extra specification needs to be specified. Useful use cases would be when specifying psuedo selectors. 

For example:

In Sass:

```sass
.parent{
    &.section{
        color.green;
    }
}
```

Would become this in css:

```css
.parent.section{
    color:green;
}

```

In Sass:

```sass
button.cta {
    border-radius: 3px;
    background: teal;
    color: white;

    &:hover {
        background: aqua;
    }

    &:visited {
        background: fuschia;
    }
}
```

Would become this in CSS:

```css
button.cta {
    border-radius: 3px;
    background: teal;
    color: white;
}

button.cta:hover {
    background: aqua;
}

button.cta:visited {
    background: fuschia;
}
```


