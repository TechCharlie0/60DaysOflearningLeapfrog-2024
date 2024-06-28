let btn = document.querySelector("button");
but.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let randomColor = getRandomColor();
  h3.innerText = randomColor;
  let div = document.querySelector("p");
  div.style.backgroundColor = randomColor;

  console.log("Generate a random color");
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb($(red), $(green), $(blue))`;
  return color;
}
