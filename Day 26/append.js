//addingelement
//document.createElement();

let newP = document.createElement("p");
newP.innerText = "hi i am a isha kandel";
console.dir(newP);

//appendchilds(element):to add the leement in last of the body
let body = document.querySelector("body");
console.log(body.appendChild(newP));

//append:to change the element/string/text
console.log(newP.append("this is new text"));

//prepent:add in the starting
console.log(body.prepend(newP));

//insert adjacent(where, element)
let btn = document.createElement("button");
console.log((btn.innerHTML = "new button!"));
let p = document.querySelector("p");
console.log(p.insertAdjacentElement("beforebegin", btn));

//removing element
//removeChild(element)
//remove(element)
console.log(body.removeChild(btn));
