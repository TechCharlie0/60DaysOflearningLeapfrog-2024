//this keyword: "This" keyword refers to an object that is executing the current piece of code
const student = {
  name: "isha",
  age: 23,
  eng: 95,
  math: 93,
  phy: 83,
  getAvg() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(avg);
  },
};

//try and catch: The try statement allows you to define a block of code to be tested for errors while it is being executrd

//The catch statement allows you to define a block of code to be executrd, if an error occurs in the block

try {
  console.log(a);
} catch {
  console.log("caught an error a is not defined");
}

//miscellaneous topics
//Arrow function
//const func = (arg1,arg2) => {
//function definition}
const sum = (a, b) => {
  console.log(a + b);
};
sum(1, 2);

//Implicit return
//const func=(arg1, arg2..) =>{value}
const func = (a, b) => {
  a * b;
};
