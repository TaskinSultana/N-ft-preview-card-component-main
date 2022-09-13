const view = document.querySelector(".view");
const container = document.querySelector(".image");
const inner = document.querySelector(".inner");
const text = document.querySelector(".text");

container.addEventListener("click", () => {
  view.style.display = "block";
  inner.style.backgroundBlendMode = "multiply";
  inner.style.opacity = "0.5";
});
text.addEventListener("click", () => {
  view.style.display = "none";
  inner.style.backgroundBlendMode = "none";
  inner.style.opacity = "1";
});
