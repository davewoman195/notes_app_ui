const burger = document.querySelector(".burger");
const sidebar = document.querySelector("aside");
const times = document.querySelector(".times");

burger.addEventListener("click", () => {
  sidebar.classList.add("active");
});
times.addEventListener("click", (e) => {
  sidebar.classList.remove("active");
});
