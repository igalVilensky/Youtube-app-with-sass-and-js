/* const modeSwitch = document.querySelector(".switch input");
console.log(modeSwitch); */

const modeSwitch = document.querySelector(".slider");
modeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("slider-open");
});
