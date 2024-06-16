//creating array
let strs = ["isha", "kandel", 12];
console.log(strs[0].length);

//indexof
console.log(strs.indexOf("kandel"));

//includes
console.log(strs.includes("isha")); //if it is find it true value then false

//array are mutable
let fruit = ["mango", "apple", "litchi"];
fruit[0] = "banana";

//array method
//push
let str = ["isha", "kandel", "robert", "pattinson"];
console.log(str.push("lover"));
//pop
console.log(str.pop());
//unshift
console.log(str.unshift("mygod"));
//shift
console.log(str.shift());
