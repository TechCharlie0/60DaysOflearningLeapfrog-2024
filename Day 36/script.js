let sub = document.getElementById("submit");
sub.addEventListener("click", function () {
  let pop = document.getElementById("popupMenu");
  pop.classList.add("popupActive");
});

let clse = document.getElementById("close");
clse.addEventListener("click", function () {
  let pop = document.getElementById("popupMenu");
  pop.classList.remove("popupActive");
});
