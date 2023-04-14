const loadText = document.querySelector(".loading_text");
const bg = document.querySelector(".bg");

let load = 70;
let blurText = 1;

const blurringAfter30Second = setInterval(blurring, 30);

function blurring() {
  load--;
  blurText -= 0.01;
  console.log(parseFloat(blurText).toFixed(2));

  if (load < 1) {
    blurText = 0;
    clearInterval(blurringAfter30Second);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = parseFloat(blurText).toFixed(1);
  bg.style.filter = `blur(${load}px)`;
}
