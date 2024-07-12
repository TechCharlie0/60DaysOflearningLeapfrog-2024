// Selecting all labels within the element with class 'form-control'
const labels = document.querySelectorAll(".form-control label");

// Adding transition delay to each letter within the labels
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

// Selecting all spans within the element with class 'input-box'
const spans = document.querySelectorAll(".input-box span");

// Adding transition delay to each letter within the spans
spans.forEach((span) => {
  span.innerHTML = span.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
