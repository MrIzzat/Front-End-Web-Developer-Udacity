# Inline

It's possible to write CSS code directly within HTML. This can be done by adding a style attribute `style` and specifying what that style is. 

For example:

`<p style="color: red;">I'm leanring to code!</p>`

To add more than one style in an inline linking, the style can be added directly after the semicolon `;`.

For example:

`<p style="color: red; font-size: 20px;">I'm learning to code!</p>`

\
CSS rules can also be added in the style attribute.

For example:
```
<p>
    Want to try crossing out an 
    <a href="nowhere.html" style="color: #990000; text-decoration: line-through;">obselete link</a>
</p>
```

\
Even though the `style` attribute can take as many CSS rules as possible, because it is an attribute it must all be on one line.

Inline styles have a higher priority than any other styles given to an element. Which means if the element is selected and styled in other ways (external sheet or using `<style>`), the other style will not have an affect on the element at all. Inline styling should be avoided unless absolutely necessary. They make it harder to change styling down the line without a lot of extra manually work (going through each element styled inline when it comes to improving them). CSS classes should be used in place of inline styles.

# Style Tag `<style>`

Inline styling does not allow the selection and styling of multiple elements at once, they must be styled seperately and manually. `<style>` allows for the writing of CSS code within an HTML page, which means it allows for selectors as well. The CSS code is written within the style tags while the style tags are located within the head tag `<head>`.

```
<head>
    <style></style>
</head>
```

For example:

```
<head>
    <style>
        p {
            color: red;
            font-size: 20px;
        }
    </style>
</head>
```

This style makes all paragraphs have red characters and have a font size of 20 pixels. The syntax of the properties and values matches inline styling.

# External Stylesheets

CSS styles don't need to be contained in the same file as the HTML. Instead, it can be in a seperate file that can be linked to the HTML file. The link tag `<link>` can be used to link the CSS style file to the HTML file. It uses the following attributes:

* `href` to specify the path to the file
* `type` to specify the type of file, in this case it's a CSS file so it should be set to `text/css`
* `rel` to specify the relationship between the HTML and CSS files, in this case it should be `stylesheet`

An example:

```
<link href="https://udacity.com/style.css" type="text/css" rel="stylesheet" />
```

Another example:

```
<link href="./style.css" type="text/css" rel="stylehseet />
```

The reference can be a URL to the style sheet or a path (relative or otherwise).

In HTML5, `type="text/css"` is not required.

CSS files can be linked to each other by using the `@import` command. It's useful to breakdown CSS files into smaller CSS files and then importing them to a main CSS file, to have them more organized.

An example:

```
@import "./layout";
@import "./images";
@import "./blog_cards";