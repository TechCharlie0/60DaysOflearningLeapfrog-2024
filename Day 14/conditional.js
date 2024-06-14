//if statement

let color = "red";
if (color === "red") {
  console.log("stop!");
}
if (color === "yellow") {
  console.log("slow down!");
}
if (color === "green") {
  console.log("go");
}

//else-if statement
let age = 14;
if (age >= 18) {
  console.log("you can vote");
} else if (age <= 18) {
  console.log("you cannot vote");
}

//else statement
let age1 = 10;
if (age1 >= 19) {
  console.log("you can vote");
} else {
  console.log("you cannot vote");
}

//nested if-else
let marks = 45;
if (marks >= 33) {
  console.log("pass");
  console.log("Grade: c");
} else {
  console.log("better luck next time!");
}
