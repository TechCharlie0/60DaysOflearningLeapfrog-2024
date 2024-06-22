document.querySelectorAll(".left-icon a").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    alert(`You clicked on ${event.target.textContent.trim()}`);
  });
});

// Function to toggle dark mode
const toggleButton = document.getElementById("toggle-dark-mode");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  toggleButton.textContent = isDarkMode
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});
