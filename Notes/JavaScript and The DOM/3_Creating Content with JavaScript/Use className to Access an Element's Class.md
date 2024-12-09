JavaScript should not be used in place of a CSS style sheet. HTML should be in an HTML file, CSS in a CSS file and JavaScript should be used for interactivity between HTML and styling.

An example of interactivity is changing the class of an element to when a certain action is performed to change how that element looks.



The `.className` property can be used to access or change the class of a property.

For example:

```html
<h1 id="main-heading" class="card box">Hi</h1>
```

```js 

const mainHeading = document.querySelector('#main-Heading');

const listOfClasses = mainHeading.className;

console.log(listOfClasses);
```

The first line gets the main heading element in stores it into a variable. The second lines retrieves all class names from that element and stores it as a list into a variable. The final line prints out the list of classes, which are `card` and `box`. 

`className` returns seperates the class names based on spaces.


# Setting An Element's Class


Setting the class name value for an element is as easy as an assignment, for example:


```js
mainHeading.className = 'new-class';
```

Doing this will replace any class that was orignally in the element.

# Adding or Removing Classes Using String and Array Methods

`.className` returns a string, this makes it harder to interact with certain classes when there more than one class in that element. The space seperated string can be converted into a array of values by using the `split()` string method.

For example

```js
const arrayOfClasses = listOfClasses.split(' ');

console.log(arrayofClasses);
```

The first line will convert the string of classes `card box` into a string array `['card', 'box']` where each value is a class, this makes it easier to interact with each class. The second line prints out the array of classes.

Having the classes as an array allies for:

* using a for loop to iterate through the class names
* using `.push()` to add an item to the array
* using `.slice()` to remove an item from the array
* usning `.join()` to convert the array back into a string.


For example, removing `box` with `border` would look like this:


```js

const mainHeading = document.querySelector('#main-heading');

const arrayOfClasses = mainHeading.className.split(' ');

for (let i=0; i< arrayOfClasses.length ; i++){
    if(arrayOfClasses[i] == 'box'){
        arrayOfClasses[i] = 'border';
    }
}

const newClassList = arrayOfClasses.join(' ');

mainHeading.className = newClassList;
```

The first line gets the element with the classes to change. The second line converts the `className` string to an array of strings. The for loop iterates through the array of strings looking for the class to change, if it's find it's value is replaced with the class name to be changed with. The line following the for loop converts the array of strings into a single string with a seprator character using the `join()` function. The final line adds the newly created strign back to the element.

There is another way to do this using `splice()` and `push()`:

```js

const mainHeading = document.querySelector('#main-heading');

const arrayOfClasses = mainHeading.className.split(' ');

for (let i=0; i< arrayOfClasses.length ; i++){
    if(arrayOfClasses[i] == 'box'){
        arrayOfClasses.splice(i, 1);
    }
}

arrayOfClasses.push('border');

const newClassList = arrayOfClasses.join(' ');

mainHeading.className = newClassList;
```

The first difference is that the index that contains the class is removed using the `splice()` function. The second difference is that the new class is added using the `push()` function.