//function
//function defination(telling the js)
function isha() {
  console.log("function calling"); //do something
}
//function calling(using the function)
isha();

//Question: create a function that prints a poem
function printPoem() {
  console.log("Twilking Twinkiling litter star");
}
printPoem();

//Question:Create a function to roll a dice and always display the value of the dice

function rollDice() {
  let rand = Math.floor(Math.random() * 6) + 1;
  console.log(rand);
}
rollDice();

//function with argument
//values we pass to the function
function printName(name, age) {
  console.log(`${name}'s  age is  ${age}`);
}
printName("Isha kandel", 21); //result:Isha kandel age's 21

//Question: Create a function that gives us the average of 3 numbers

function averageNum(a, b, c) {
  console.log(a + b + c / 3);
}
averageNum(23, 34, 32);
