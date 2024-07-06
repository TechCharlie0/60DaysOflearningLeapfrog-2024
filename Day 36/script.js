document.getElementById("submit").addEventListener("click", function () {
  document.getElementById("popupMenu").classList.add("popupActive");
});

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("popupMenu").classList.remove("popupActive");
});
