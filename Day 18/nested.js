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
