/* const modeSwitch = document.querySelector(".switch input");
console.log(modeSwitch); */

/* const modeSwitch = document.querySelector(".slider");
modeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("slider-open");
}); */

const theme = () => {
  const mood = document.querySelector("#light-dark").checked;
  body = document.querySelector(`.videos-wrapper`).style;
  body2 = document.querySelector(`.theme`).style;
  body3 = document.querySelector(`#nav-chn`).style;
  body4 = document.querySelector(`.sort-uploads-play-all`).style;
  body5 = document.querySelector(`.top-bar`).style;
  body6 = document.querySelector(`.left-side-main-top-div`).style;
  body7 = document.querySelector(`.left-side-main-middle-div`).style;
  body8 = document.querySelector(`.left-side-main-bottom-div`).style;
  body9 = document.querySelector(`html`).style;
  body10 = document.querySelector(`.fas.fa-microphone `).style;

  if (mood) {
    body.backgroundColor = "#0F0F0F";
    body2.backgroundColor = "#181818";
    body3.backgroundColor = "#181818";
    body4.backgroundColor = "#0F0F0F";
    body5.backgroundColor = "#202020";
    body6.backgroundColor = "#212121";
    body7.backgroundColor = "#212121";
    body8.backgroundColor = "#212121";
    body9.backgroundColor = "#212121";
    body10.color = "#FFFFFF";
  } else {
    body.backgroundColor = "#f1f1f1";
    body2.backgroundColor = "#f9f9f9";
    body3.backgroundColor = "#f9f9f9";
    body4.backgroundColor = "#f9f9f9";
    body5.backgroundColor = "#FFFFFF";
    body6.backgroundColor = "#FFFFFF";
    body7.backgroundColor = "#FFFFFF";
    body8.backgroundColor = "#FFFFFF";
    body9.backgroundColor = "#FFFFFF";
    body10.color = "#6F6F6F";
  }
};

/* const test = document.querySelector("body"); */
