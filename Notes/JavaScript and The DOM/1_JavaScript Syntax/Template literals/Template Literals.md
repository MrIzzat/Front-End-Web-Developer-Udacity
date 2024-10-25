The old way to concatenate strings is by using the concatenation operator `+`:

```js
const student = {
    name: 'Richard Kalehoff',
    gaurdian: 'Mr. Kalehoff'
};

const teacher = {
    name: 'Mrs.Wilson',
    room: 'N231'
};

let message = student.name + 'please see ' + teacher.name + ' in ' +teacher.room + 'to pick up your report card.';
```

`message` will contain: `Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card.`

Syntax wise, it will do what is needed. But it will make the code a lot less readable when the string needs to be multi-line, like this:

```js
let note = teacher.name + ',\n\n' +
  'Please excuse ' + student.name + '.\n' +
  'He is recovering from the flu.\n\n' +
  'Thank you,\n' +
  student.guardian;
  ```

Which will contain: 

```
Mrs. Wilson,

Please excuse Richard Kalehoff.
He is recovering from the flu.

Thank you,
Mr. Kalehoff
```


# Template Literals

With the use of **template literals**, strings can be concated in a different, more readable manner. *there is also String's `concat()` but it's also not as readable`*.

Template literals are basically string literals that can include embedded expressions. They can be specified by using back ticks ``` `` ``` instead of double qutotions ` "" ` or single quotations ` '' `. To display a variables value, `${expression}` is used, which is much easier to build strings with.

An example:

```js
let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`; 
```

Which outputs: `Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card.`


Template literals with multi line expressions can look like this:

```js
let note = `${teacher.name} ,

  Please excuse ${student.name}
  He is recovering from the flu.

  Thank you,
  ${student.guardian}`;
  ```

Makes it a lot more readable.

Template literals do not need to have a newline explicitly written, they can preserve newlines as part of the string.

Expressions embedded in a template literal do not need to only reference variables. Operations, calling functions and loops can all be performed within an embedded expression.
