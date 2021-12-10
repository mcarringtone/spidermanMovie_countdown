document.addEventListener("DOMContentLoaded", () => {
  theCountdown();
});

let openingDay = document.getElementById("countdown-display");

let theCountdown = () => {
  let releaseDate = 17;

  let currentDay = new Date();

  let todayDate = currentDay.getUTCDate();

  let remaining = releaseDate - todayDate;

  openingDay.textContent = remaining;
};
