const toggleSwitch = document.getElementById("dark-mode-toggle");
toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
