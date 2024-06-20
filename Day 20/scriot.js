//Returm: return keyword is used to return some value from the function
function sum(a, b) {
  return a + b;
}
console.log(sum(a + b));

//Question:Create a function that return the sum of numbers from 1 to n
function loop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++);
  sum += 1;

  return sum;
}
console.log(loop(3));

//Scope: scope determine the accessibility of variable, objects, function from different parts of the code

//Funtion Scope:defined inside a function are not accesible/visible form the outside the function
let Add = 54; //Global Scope
function calSum(a, b) {
  let Add = a + b; //Function Scope is higher specific than global
  console.log(Add);
}
calSum(1, 2);

//Block Scope:Vriables declares inside{} block cannor be accessed from outside the block
{
  let a = 25;
  console.log(a); //Var is not used in block scope
}

//Lexical Scope: a variable defined outside a function can be accesible inside thr another function defined after the variable declaration
//The opposite is NOT true
function outerFunc() {
  let x = 5;
  let y = 6;
  function innerFunc() {
    console.log(x);
  }
  innerFunc();
}
