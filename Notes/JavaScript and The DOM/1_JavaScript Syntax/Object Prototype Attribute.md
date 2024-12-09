The `prototype` attribute is available with every JavsScript object. It allows the adding of new properties to objects. It can be done with the built in JavaScript datatypes but it's not recommended, as they can't be controlled (this applies to any object that can't be controlled). These include:

* Numbers
* Strings
* Arrays
* Dates
* Booleans
* Function
* Objects

Example Usages:

```js

Array.prototype.myUcase = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

```
Which allows it to be used like this:

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();
```

Using it with a custom object:

```
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
```

Source of information is from here:

https://www.w3schools.com/jsref/jsref_prototype_array.asp#:~:text=Description,available%20with%20all%20JavaScript%20objects.