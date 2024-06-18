//for loop
for (let i = 1; i <= 15; i++) {
  console.log(i);
}

//print all even number
for (let i = 0; i <= 10; i = i + 2) {
  console.log(i);
}

//nested for loop
for (let i = 1; i < 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}

//while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//loops with array
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}
