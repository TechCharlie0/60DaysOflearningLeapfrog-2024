//every:return true if every element of array gives true for some functin.else returns false
//arr.every(some function definition or name);
let arr = [1, 2, 3, 4];
arr.every((el) => el % 2 == 0); //false
let arr1 = [2, 4];
arr1.every((el) => el % 2 == 0); //true

//reduce:reduce the array to a single value
//arr.reduce(reducer function with 2 variaboe fo(accumulator,element);

let odd = [1, 2, 3, 4];
odd.reduce((res, el) => res + el);
