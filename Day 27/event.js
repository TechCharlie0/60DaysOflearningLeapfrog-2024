//Dom events:events are signals tthat something has occured(user inputs/actions)
//onclick(when an element is clicked)
//onmouseenter(when mouse enters an element)

let btns = document.querySelector("button");
btn.onclick = function () {
  console.log("you clicked");
};

//EventListener
//element.addEventLisstener(event, click)

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log("button was clicled");
});

//this is eventlisteners
//when 'this' is used in ca callback of event handler of domething it refers to that something

let bot = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(this.innerText);
  this.style.backgroundColor = "pink";
});
