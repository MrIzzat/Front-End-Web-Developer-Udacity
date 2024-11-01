Because an ID is supposed to be unique, the `getElementById()` cannot and is not supposed to return more than one element.

The following DOM functions on the other hand, can return multiple elements:

* `getElementsByClassName()`
* `getElementsByTagName()`


# Accessing Elements By Their Class

The `getElementsByClassName()` function can be used to get elements based on the class name.

Syntax:
```js
document.getElementsByClassName();
```

An example:

```js
document.getElementsByClassName('brand-color');
```

# Accessing Elements By Their Tag

Instead of trying to get an element based on their class or Id, it can be retrieved based on the tag itself using the `getElementsByTagName()` function.

Syntax:

```js
document.getElementsByTagName()
```

An example:

```js
document.getElementsByTagName('p');
```

`getElementsByClassName()` and `getElementsByTagName()` return an object that is similar to an array but it's not quite one. They return a live **HTML collection**.