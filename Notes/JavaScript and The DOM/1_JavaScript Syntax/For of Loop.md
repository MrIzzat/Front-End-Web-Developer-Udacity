The for of loop is used to loop over and type of data that is iterable.

An example:

```js

const digits = [0, 1, 2, 3, 4, 5, 6, 7 ,8 9];

for (const digit of digits){
    console.log(digit);
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
```
\
The for of loops is the most concise for loop.

It's conventional to name the object that contains the collection of values in plural form and the singular version for the individual value being references:

An example
```js
for (const button of buttons) {...}
```

An example of all three for loops used for the exact same purpose:
<br>
```js
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
```

Classic for loop:

```js
for (let i=0; i< digits.length; i++){
    console.log(digits[i]);
}
```

for in loop:

```js
for (const index in digits){
    console.log(digits[index]);
}
```

for of loop:

```js
for( const digit in digits){
    console.log(digit);
}

```


In addition to the previous benefits, the for loop overcomes weaknesses of other for loops.

The for loop can be stopped or broken at any time. For example:


```js
const digits= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

for (const digit of digits){
    if (digit%2 ===0){
        continue;
    }
    console.log(digit);
}
```
Prints:
```
1
3
5
7
9
```

New properties added using the `prototype` attribute won't be looped over as only values in an object are looped over in for of loops. 

For example:

```js
Array.prototype.decimalfy = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
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
```

It did not print anonymous function nor the function code (Added properties were not printed).

# In Summary

<table>
    <thead>
        <tr>
            <th></th>
            <th><span style="font-weight: 700; font-style: normal;">for loop</span></th>
            <th>for...in loop</th>
            <th><span style="font-weight: bold;">forEach()</span></th>
            <th>for...of loop</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span style="font-weight: bold;">Benefits</span></td>
            <td>- Common<br>- Good for arrays</td>
            <td>- Eliminates the need to keep track of a counter and exit condition</td>
            <td>- Eliminates the need to keep track of a counter and exit condition<br>- Eliminates
                the use of an index</td>
            <td>- Loops over any data that is iterable (as opposed to enumerable)<br>- Eliminates
                use of an index<br>- Can stop or break anytime</td>
        </tr>
        <tr>
            <td><span style="font-weight: bold; font-style: normal;">Drawbacks</span></td>
            <td>- Keeping track of the counter and exit condition<br>- Possible confusion<br>- Not
                as easy to use if data not structured like an array</td>
            <td>- Still uses an index to access the values in an array<br>- Possible confusion<br>-
                Loop over all enumerable properties - including functions</td>
            <td>- Only works with arrays<br>- Unable to break - must return</td>
            <td>- Don't have access to an index, which is sometimes needed</td>
        </tr>
    </tbody>
</table>