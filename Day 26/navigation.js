//navigation
//paraElement //single
//children
//previousElementSibling/nextSibling
let h4 = document.querySelector("h4");
console.log(h4.parentElement);

let box = document.querySelector(".box");
console.log(box.children);

let ul = document.querySelector("ul");
console.log(ul.childElementCount);
console.log(ul.children);
console.log(ul.children[1].previousElementSibling);

//using classList
//obj.classList
let cls = document.querySelector("h1");
console.log(cls.classList);

//to add new classes
console.log(cls.classList.add("abc"));

//to remove a new class
console.log(cls.classList.remove("abc"));

//to check if class exists
console.log(cls.classList.contains("abc"));

//to toggle between add and remove
console.log(cls.classList.toggle("abc"));
