**Typography** is the styling of text. It has many different aspects that can be styled.


# Text Alignment

The text alignment of text in an element can be modified with use of the `text-align` property. 

An example:

```
p{
    text-align:left;
}
```

# Underlined Text

The `text-decoration` property deteremines if a text should be underlined or not. Setting it to `none` can remove the default underline in hyperlinks.

An example:
```
a {
    text-decoration: none;
}
```

# Deleted Text

The `text-decoration` property can also be used to a strike through text to make it seem like it's deleted. It's best to handle this is in HTML with the use of `<ins>` and `<del>` elements rather than addying a line-through style using `text-decoration`.

# Line Height

`line-height` is used to specify the the distance between lines in the same paragraph. It is not an alternative to the bottom and top variants of margin and padding because those are used to seperate different elements, usually different paragraphs while `line-height` tends to be used in the same element.