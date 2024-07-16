let loginForm = document.querySelector(".login-form");
let signupForm = document.querySelector(".signup-form");
let loginBtn = document.querySelector(".login button");
let signupBtn = document.querySelector(".signup button");
let backLayer = document.querySelector(".back-layer");

signupBtn.addEventListener("click", () => {
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
  backLayer.style.clipPath = "";
});

loginBtn.addEventListener("click", () => {
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
  backLayer.style.clipPath = "";
});
