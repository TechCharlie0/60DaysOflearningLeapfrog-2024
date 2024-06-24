//DOM:The dom represent a document with a logical tree
//it allows us to manipulate change webpage content(html element)
console.dir(document);

//selecting element

//getElementById
//Return the element as an object or null(if not found)
let sselect = document.getElementById(mainImg);
let img = document.getElementById("mainImg");

//getElementByClass
//return the elements as an html collection or empty collection(if not found)
let clickClass = document.getElementsByClassName("oldImg");
let clickClassfirst = document.getElementsByClassName("oldImg")[0];

//getElementByTagName
//returns t(he element as an html collection or empty collection(if not found) )
let clickTage = document.getElementsByTagName("p");

//query selector
//allows us to use any css selector
document.querySelector("p"); //selects first p element
document.querySelector("#myId"); //selects first with id = myId
document.querySelector(".myClass"); //selects first element with class = myClass

document.querySelectorAll("p"); //selects All p element
