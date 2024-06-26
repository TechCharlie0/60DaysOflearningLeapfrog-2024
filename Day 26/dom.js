//using properties and method
//innerText:shows the visible text contained in a node
//textContent:shows all the full text
//innerHTML:shoes the full marksup

let innerTxt = document.querySelector("p");
console.log(innerTxt.innerText);
console.log(innerTxt.textContent);
console.log(innerTxt.innerHTML);

//manipulating attributes
//obj.getAttribute(attr)
//obj.setAttribute(attr,val)

let img = document.querySelector("img");
console.log(img.getAttribute("class"));
console.log(img.setAttribute("class", "spidermanImg"));
console.log(img.setAttribute("src", "./img2.jpg"));

//manipulating style
//style property

let styl = document.querySelector("h1");
console.log((styl.style.color = "purple"));
console.log((styl.style.backgroundColor = "Pink"));

let links = document.querySelectorAll(".box a");
for (let i = 0; i < links.length; i++) {
  links[i].style.color = "orange";
}
