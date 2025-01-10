Even though variables are available in vanilla CSS, the variables in Sass are more flexible and understandable. (especially with something called theming (?))

Example usage of variables in Sass:

```sass
$font-stack: Helvatica, sans-serif;
$primary-color: $333;

body {
    font: 100% $font-stack;
    color: $primary-color;
}

In CSS, this becomes:

```css
body {
    font: 100% Helvetica, sans-serif;
    color: #333;
}

