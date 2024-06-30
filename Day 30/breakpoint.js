//js is single threaded
let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a + b);
//or
setTimeout(() => {
  console.log("isha kandel");
}, 2000);
setTimeout(() => {
  console.log("Robert pattinson");
}, 2000);
console.log("hello..");
