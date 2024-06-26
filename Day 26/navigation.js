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
