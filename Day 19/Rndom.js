//js obje t literals
//use to store keyed collection and complex entities
let student = {
  name: "isha",
  age: 21,
  marks: 94.4,
  city: "narayangadh",
};

//get values
let students = {
  name: "robert",
  marks: 99.9,
};
console.log(students.name); //robert

//add/update value
const stud = {
  name: "robert",
  age: 21,
  marks: 94.4,
  city: "narayangadh",
};
stud.city = "mumbai"; //update value
stud.gender = "male"; //add value
console.log(stud); ////printing obj
delete stud.city; //deleting key value pair of obj

//object of objects
//storing information of multiple students
const classInfo = {
  aman: {
    grade: "A+",
    city: "chitwan",
  },
  isha: {
    grade: "A+",
    city: "Gaindakot",
  },
  Robert: {
    grade: "A",
    city: "Gaindakot",
  },
};
//acessing the key value pain in nestes obj
console.log(classInfo.isha.grade);
console.log(classInfo.Robert.city);
