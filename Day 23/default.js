//default parameter:giving a default value to the arguments
//function func(a,b = 2){
//do something
//}
function sum(a, b = 3) {
  return a + b;
}
sum(2); //5

//spread:to expands an iterable into multiple values
//function func(..arr){
//do something
//}
let arr = [1, 2, 3, 4, 5];
Math.min(...arr);
console.log(...arr);
