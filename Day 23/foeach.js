//forEach:arr.forEach(some function definition or nam);
let array = [1, 2, 3, 4, 5];
let print = function (el) {
  console.log(el);
};
arr.forEach(print);

let arr = [
  {
    name: "isha",
    marks: 97,
  },
  {
    name: "robert",
    marks: 95,
  },
  {
    name: "Starc",
    marks: 93,
  },
];
arr.forEach((student) => {
  console.log(student.marks);
});

//map: let newArr = arr.map(some function definition or name)
let num = [1, 2, 3, 4];
let double = num.map(function (el) {
  return el * 2;
});

//finter: let newArr = arr.filter(some function definition or name);
let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
let even = nums.filter((num) => num % 2 == 0);
