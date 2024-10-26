```js
function average(...nums) {
  let sum = 0;
  for(const num of nums) {
    sum+=num;
  }
  if (nums.length > 0) return sum/nums.length;
  else return sum;
}
```