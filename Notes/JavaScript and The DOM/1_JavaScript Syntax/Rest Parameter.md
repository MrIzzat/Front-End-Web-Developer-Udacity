While the spread operator can be used to spread an array into multiple elements, the **rest parameter** is used to group multiple elements into an array.


The rest parameter is also written with three dots `...` like the spread operator. It allows for the representation of an indefinite number of elements as an array.

A situation where the rest parameter is useful is when assigning values of an array to a variable.

For example:

```js
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;

console.log(totalm subtotal, tax, items);
```
Prints:
```
20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]
```

In the previous example, the first three orders are destructed into the `total`, `subtotal` and `tax` variables. The *rest* of the values in the `order` array are placed into an `items` array.

The rest parameter can be said to be the opposite of the spread operator.

The spread operator can be used to unpack items like this:

```js
const myPackage = ['cheese', 'eggs', 'milk', 'bread'];
console.log(...myPackage); //this line unpacks the items in myPackage
```

The rest operator can be used to package items like this:

```js
printPackageContents('cheese', 'eggs', 'milk', 'bread');
function printPackageContents(...items) { //this is the line were items are packaged together into items
 for(const item of items) {// The packaged items are treated similarly to an array
   console.log(item);
 }
}
```


# Vardiac Functions

Another usage for the rest paramter is when working with vardiac functions. **Vardiac functions** are functions that can take an indefinite amount of arguments.


For example, a `sum()` function can be created that calculates the sum of an indefinite amount of numbers. It would look like this during execution:

```js
sum(1, 2);
sum(10, 36, 7, 84, 90, 110);
sum(-23, 3000, 575000);
```

A vardiac object can be achieved by using the **arguments object**. It's basically an array like object that is available as a local variable inside all functions. It contains a value for each argument passed starting from 0.


A `sum()` function can be created with the arguments object like this:

```js
function sum() {
    let total=0;
    for (const argument of arguments){
        total+=argument;
    }
    return total;
}
```

There are two issues with this type of function:

1. The funciton signature shows that there are no parameters. But this is misleading as it can take in an indefinite number of parameters.

2. If the arguments object has never been seen before by the reader, it may confuse them to know where the arguments object came from and how it works.


By using the rest parameter, it solves these issues. The `sum()` function can be written like this instead:


```js
function sum(...nums){
    let total=0;
    for (const num of nums){
        total += num;
    }
    return total;
}
```

This version is more concise and easier to read.