/* const modeSwitch = document.querySelector(".switch input");
console.log(modeSwitch); */

/* const modeSwitch = document.querySelector(".slider");
modeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("slider-open");
}); */

const theme = () => {
  const mood = document.querySelector("#light-dark").checked;
  body = document.querySelector("body").style;
  if (mood) {
    body.backgroundColor = "white";
  } else {
    body.backgroundColor = "black";
  }
};

/* const test = document.querySelector("body"); */
