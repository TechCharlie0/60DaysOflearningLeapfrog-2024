//Tempelate leteral in JS

let pencilPrice = 10;
let eraserPrice = 30;
console.log("The total price is:", pencilPrice + eraserPrice, "Rupees"); //Normal JS

console.log(`The total price is : ${pencilPrice + eraserPrice}rupees `); //after using the template literal in js

let firstName = "isha";
let lastName = "kandel";
console.log(`My name is ${firstName + lastName}`); //after using the template literal in js

//logical operator
let marks = 75;
if ((marks > 33 && marks <= 80) || !false) {
  console.log("pass");
}

//switch statement
let color = "red";
switch (color) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("slow down");
    break;
  case "green":
    console.log("go");
    break;
  default:
    console.log("broken light");
}
