const hamburger = document.getElementById("menu");
const navigation = document.getElementById("navigation");
hamburger.addEventListener("click", function () {
  navigation.classList.toggle("active");
  console.log("clicked");
});
