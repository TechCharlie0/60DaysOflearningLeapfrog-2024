//every:return true if every element of array gives true for some functin.else returns false
//arr.every(some function definition or name);
let arr = [1, 2, 3, 4];
let odding = arr.every((el) => el % 2 == 0); //false
console.log(odding);

let arr1 = [2, 4];
let even = arr1.every((el) => el % 2 == 0); //true
console.log(even);

//reduce:reduce the array to a single value
//arr.reduce(reducer function with 2 variaboe fo(accumulator,element);

let odd = [1, 2, 3, 4];
let finalVal = odd.reduce((res, el) => res + el); //10
console.log(finalVal);

//finding Maximum in the array
let num = [1, 2, 3, 4, 5, 6, 7, 8];
let result = num.reduce((max, el) => {
  if (el > max) {
    return el;
  } else {
    return max;
  }
});
console.log(max);
