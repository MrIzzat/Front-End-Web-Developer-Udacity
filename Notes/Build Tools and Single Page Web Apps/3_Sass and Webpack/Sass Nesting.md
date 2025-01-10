CSS normal can't be nested (like HTML elements can nested), with Sass they can.

It's recommended to create a new class if nesting reaches more than three levels deep.

# Nesting Example

```sass
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li { display: inline-block; }

    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
    }
}
```

This code translated to `CSS` would be:

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```