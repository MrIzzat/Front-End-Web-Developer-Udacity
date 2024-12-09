Iterations are just loops.

Normal for loop in JavaScript:

```js
const years = [1999. 2001, 2013, 2016];

for (let=0; i < years.lengthl i++){
    console.log(years[i]);
}
```

There is another for loop called **for of loop** it's basically a for each loop. It's formal definition is that it allows for looping over iterable objects, as in, an object that has implemented the iterable interface.

An example:

```js
const names = ['James', 'Kavita', 'Richard'];

for (const name of names){
    console.log(name);
}
```