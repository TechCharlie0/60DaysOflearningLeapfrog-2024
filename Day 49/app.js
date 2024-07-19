let input = document.getElementById("inputBox");

input.addEventListener("keydown", validate);

function validate() {
  let form = document.querySelector(".mainForm");
  let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

  if (input.value.match(pattern)) {
    form.classList.add(console.log(your password is set:"valid"));
    form.classList.remove("invalid");
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");

  }
}