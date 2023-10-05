console.log("aaaaaaaa");
const dotdotdot = document.querySelector("#dotdotdot");
const menu = document.querySelector("#menu");
const body = document.querySelector("#body");
const imgdump = document.querySelector("#imgdump");
const hLink = document.querySelectorAll("#hLink");
const moon = document.querySelector("#moon");
dotdotdot.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("h-screen");
  dotdotdot.classList.toggle("bg-white");
});
hLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});
moon.addEventListener("click", () => {
  body.classList.toggle("dark");
});
// console.log(dotdotdot);
// console.log(menu);
