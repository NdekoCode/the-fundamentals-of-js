const btns = document.querySelectorAll(".btn");
/**
 *
 * @param {PointerEvent} event
 */
function onButtonClick(event) {
  console.log(event.currentTarget);
}
const important = document.querySelector(".important");
function ChangeColor() {
  console.log("LOl");
  important.style.backgroundColor = `rgb(${parseInt(
    Math.random() * 255
  )},${parseInt(Math.random() * 255)},${parseInt(Math.random() * 255)})`;
}
const btn = important.querySelector(".btn");
btn.addEventListener("click", (evt) => {
  evt.stopPropagation();
  console.log("Lol");
});
important.addEventListener("click", ChangeColor);
btns.forEach((btn) =>
  btn.addEventListener("click", function (event) {
    console.log(this);
    console.log("Target", event.currentTarget);
  })
);
// FORMULAR
const form = document.querySelector(".simple-form");
const rpg = document.getElementById("rpg");
rpg.addEventListener("change", (e) => {
  console.log(e.currentTarget.checked);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = formData.entries();
  for (let d of data) {
    console.log(d[0], d[1]);
  }
});
const spoilers = document.querySelectorAll(".spoiler");
spoilers.forEach((p) =>
  p.addEventListener("click", (e) => {
    e.target.classList.remove("spoiler");
  })
);
