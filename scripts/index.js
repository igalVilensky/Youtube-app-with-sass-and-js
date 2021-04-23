/* const modeSwitch = document.querySelector(".switch input");
console.log(modeSwitch); */

/* const modeSwitch = document.querySelector(".slider");
modeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("slider-open");
}); */

const theme = () => {
  const mood = document.querySelector("#light-dark").checked;
  body = document.querySelector(".videos-wrapper", ".top-menu").style;

  if (mood) {
    body.backgroundColor = "#F9F9F9";
  } else {
    body.backgroundColor = "#0F0F0F";
  }
};

/* const test = document.querySelector("body"); */
