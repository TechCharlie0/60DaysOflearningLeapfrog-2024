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

//with object literals
let data = {
  email: "ishachttri@gmail.com",
  password: "abcd",
};
let dataCopy = { ...data, id: 123 };

//rest:allows afunction to take an indefinite number of arguments and bundle them in an array
function sum(...args) {
  //arguments
  for (let i = 0; i < args.length; i++) {
    console.log("you gave us:", args[i]);
  }
}

//destructuring:storing values of array into multiple variable
let names = ["isha", "robert", "kandel", "pattinson"];
let [winner, runnerup] = names;
console.log(winner, runnerup); // "isha","robert"

//for object
const student = {
  name: "isha",
  age: 14,
  class: 9,
  subject: ["english", "math", "science", "nepali"],
  username: "ishachttri@",
  password: "abcd",
};
console.log(student.username);
console.log(student.password);
