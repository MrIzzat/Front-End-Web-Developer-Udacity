Array.prototype.decimalfy = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toFixed(2);
    }
  };
  
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  for (const index in digits) {
    console.log(digits[index]);
  }