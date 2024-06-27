//Dom events:events are signals tthat something has occured(user inputs/actions)
//onclick(when an element is clicked)
//onmouseenter(when mouse enters an element)

let btn = document.querySelector("button");
btn.onclick = function () {
  console.log("you clicked");
};
