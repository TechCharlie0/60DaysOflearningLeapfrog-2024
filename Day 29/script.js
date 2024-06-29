let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelector("li");
div.addEventListener("click", function () {
  console.log("we clicked it");
});
ul.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("we clicked it");
});
for (list of lis) {
  lis.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("we clicked it");
  });
}
