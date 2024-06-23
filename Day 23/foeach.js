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
