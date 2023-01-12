// Links

const $clockContentItem = document.querySelectorAll(".clock__content-item");
const $clockLink = document.querySelectorAll(".clock__link");

$clockLink.forEach(function (element, index) {
  element.addEventListener("click", function () {
    $clockLink.forEach(function (e, i) {
      e.classList.remove("active");
      $clockContentItem[i].classList.remove("active");
    });
    element.classList.add("active");
    $clockContentItem[index].classList.add("active");
  });
});

/**************************************************************/

// Clock

const $hour = document.querySelector(".hour");
const $minute = document.querySelector(".minute");
const $second = document.querySelector(".second");
const $clock__h = document.querySelector(".clock__h");
const $clock__m = document.querySelector(".clock__m");
const $clock__s = document.querySelector(".clock__s");

// Digital clock

let intervalClock;
function currentTime() {
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  $hour.innerHTML = hour > 9 ? hour : "0" + hour;
  $minute.innerHTML = minute > 9 ? minute : "0" + minute;
  $second.innerHTML = second > 9 ? second : "0" + second;

  $clock__s.style.transform = `rotate(${second * 6}deg)`;
  $clock__m.style.transform = `rotate(${minute * 6 + second * 0.1}deg)`;
  $clock__h.style.transform = `rotate(${
    hour * 30 + minute * 0.5 + (second * 0.5) / 60
  }deg)`;
  setTimeout(currentTime, 1000);
}

currentTime();

/**************************************************************/

// Stopwatch

const $stopwatchHour = document.querySelector(".stopwatch__hour");
const $stopwatchMinute = document.querySelector(".stopwatch__minute");
const $stopwatchSecond = document.querySelector(".stopwatch__second");

const $stopwatchStartBtn = document.querySelector(".stopwatch__btn-start");
const $stopwatchStopBtn = document.querySelector(".stopwatch__btn-stop");
const $stopwatchResetBtn = document.querySelector(".stopwatch__btn-reset");

let stopwatchSecond = 0;
let stopwatchMinute = 0;
let stopwatchHour = 0;
let stopwatchInterval;

$stopwatchStartBtn.addEventListener("click", function (e) {
  stopwatchInterval = setInterval(function () {
    stopWatch();
  }, 1000);
  $stopwatchStartBtn.setAttribute("disabled", "disabled");
  $stopwatchStopBtn.removeAttribute("disabled");
  $stopwatchResetBtn.setAttribute("disabled", "disabled");
});

$stopwatchStopBtn.addEventListener("click", function (e) {
  clearInterval(stopwatchInterval);
  $stopwatchStopBtn.setAttribute("disabled", "disabled");
  $stopwatchStartBtn.removeAttribute("disabled");
  $stopwatchResetBtn.removeAttribute("disabled");
});

$stopwatchResetBtn.addEventListener("click", function (e) {
  $stopwatchResetBtn.setAttribute("disabled", "disabled");
  $stopwatchStartBtn.removeAttribute("disabled");
  stopwatchSecond = 0;
  stopwatchMinute = 0;
  stopwatchHour = 0;
  $stopwatchHour.innerHTML = "0" + stopwatchHour;
  $stopwatchMinute.innerHTML = "0" + stopwatchMinute;
  $stopwatchSecond.innerHTML = "0" + stopwatchSecond;
});

function stopWatch() {
  stopwatchSecond++;
  if (stopwatchSecond === 60) {
    stopwatchSecond = 0;
    stopwatchMinute++;
  }
  if (stopwatchMinute === 60) {
    stopwatchMinute = 0;
    stopwatchHour++;
  }
  $stopwatchSecond.innerHTML =
    stopwatchSecond > 9 ? stopwatchSecond : "0" + stopwatchSecond;
  $stopwatchMinute.innerHTML =
    stopwatchMinute > 9 ? stopwatchMinute : "0" + stopwatchMinute;
  $stopwatchHour.innerHTML =
    stopwatchHour > 9 ? stopwatchHour : "0" + stopwatchHour;
}
