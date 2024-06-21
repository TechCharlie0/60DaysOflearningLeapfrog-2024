//this keyword: "This" keyword refers to an object that is executing the current piece of code
const student = {
  name: "isha",
  age: 23,
  eng: 95,
  math: 93,
  phy: 83,
  getAvg() {
    let avg = eng + math + phy / 3;
    console.log(avg);
  },
};
