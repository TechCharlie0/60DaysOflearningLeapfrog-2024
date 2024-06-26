//loops with arrays
//nested loops with nested arrays
let heroes = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonderwoman", "flash"],
];
for (let i = 0; i < heroes.length; i++) {
  console.log(`list #${i}`);
  for (let j = 0; j < heroes[i].length; j++) {
    console.log(heroes[i][j]);
  }
}

//for of loop
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for (fruit of fruits) {
  console.log(fruit);
}
//string
for (char of "keapfrog") {
  console.log(char);
}

//nested for of loop
let hero = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonderwoman", "flash"],
];
for (list of hero) {
  for (hero of list) {
    console.log(hero);
  }
}
