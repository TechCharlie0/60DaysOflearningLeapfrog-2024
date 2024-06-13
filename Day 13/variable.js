//using console log
console.log("This my first JavaScript class");

//using variable in JS
var a = 5; //int
var b = 6;
console.log(a + b);

//To check the typeof Variable
var m = 7;
var n = 6;
var o = "Isha";
console.log(typeof m, typeof n, typeof o);

//using constant in JS
const a1 = 8;
a2 = a1 + 1;
console.log(a2);

//using let in JS insted of variable
let i = 3;
let j = 6;
{
  let i = 33;
  console.log(i); //let is block scope var is global scope
}
console.log(i);
