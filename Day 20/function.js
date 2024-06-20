//Function Expression
const sum = function (a, b) {
  return a + b;
};
sum(2, 3);

//Highrt Order Function: A function that does one or both
//takes one or multiple functions as arguments
function multipleGreet(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}
let greet = function () {
  console.log("hello");
};
multipleGreet(greet, 2); //result:hello hello

//return a function
function oddEvenTest(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("wrong request");
  }
}
