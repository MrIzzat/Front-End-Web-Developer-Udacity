for of loop by default works with data types `String`, `Array`, `Map` and `Set`. `Objects` (denoted by `{ }`) are not iterable by default.

To understand the benefits of the for of loop, the weakenesses of the other types of loops in JavaScript must be understood. Mainly the weaknesses of the normal for loop, the for in loop and the `forEach()` loops.

# The for loop

The for loop is just the normal for loop most commonly seen in programming. It looks like this:

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i=0; i< digits.length; i++){
    console.log(digits[i]);
}
```
Which prints:
```
0
1
2
3
4
5
6
7
8
9
```

The issue with the classic for loops is having to deal with an index to access values of the array, which makes it a little harder to interact with.

There needs to be a variable to keep track of the index, in the previous case it was `i`, in order to know what value to access. There also needs to be a way to determine the exit condition for the loop, in the previous case it was with the value `digits.length`. These make the for loop a lot less readible.

In addition to that, some data is not structured like an array so a for loops isn't always viable.

# The for in loop

The for in loop improves upon the classic for loop by removing the counting logic and exit condition.

An example:

```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits){
    console.log(digits[index]);
}
```

Which outputs:

```
0
1
2
3
4
5
6
7
8
9
```
\
For in loops still need to deal with an index to access values in an array, which can still cause problems with readibility.

Another problem with for in loops is that if an extra method is needed to be added to an array or an object that needs to be iterated over using the `prototype` attribute, it will print the value of that new property. For in loops loop over all enumerable properties, which includes properties added by the `prototype` attribute.

An example:

```js
Array.prototype.decimalfy = function(){
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toFixed(2);
    }
};

const digits = [0, 1, 2, 3 ,4 ,5 ,6 ,7, 8, 9];

for (const index in digits){
    console.log(digits[index]);
}
```

Prints:

```
0
1
2
3
4
5
6
7
8
9
function() {
for (let i = 0; i < this.length; i++) {
this[i] = this[i].toFixed(2);
}
}
```
In my case it printed  `[Function (anonymous)]` in place of the function code.

This is the reason why for in loops are discouraged from looping over arrays.

# forEach loop

There is an addtional for loop that can be used in JavaScript called the forEach loop. It's an array method `forEach()`, which means it can only be used with arrays. It's not possible to break within a for each loop. to stop execution, the `return` keyword must be used based on the conditions the for each loop should stop, since it's a function.


# In Summary:


<table>
    <thead>
        <tr>
            <th></th>
            <th><span style="font-weight: 700; font-style: normal;">for loop</span></th>
            <th >for...in loop</th>
            <th><span style="font-weight: bold;">forEach()</span>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span style="font-weight: bold;">Benefits</span></td>
            <td >- Common<br>- Good for arrays</td>
            <td >- Eliminates the need to keep track of a counter and exit condition</td>
            <td>- Eliminates the need to keep track of a counter and exit condition<br>- Eliminates the use of an index</td>
        </tr>
        <tr>
            <td><span style="font-weight: bold; font-style: normal;">Drawbacks</span></td>
            <td>- Keeping track of the counter and exit condition<br>- Possible confusion<br>- Not as easy to use if data not structured like an array</td>
            <td>- Still uses an index to access the values in an array<br>- Possible confusion<br>- Loop over all enumerable properties - including functions</td>
            <td>- Only works with arrays<br>- Unable to break - must return</td>
        </tr>
    </tbody>
</table>