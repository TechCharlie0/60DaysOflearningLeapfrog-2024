//form events

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  aconsole.log("form submitted");
});

//extracting form data
let user = this.Element[0];
let pass = this.Element[1];
console.log(user.value);
console.log(pass.value);
alert(`hi ${user.value}, your password is set to ${pass.value}`);
