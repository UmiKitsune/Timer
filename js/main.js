function updateCounter() {
  const releaseDate = new Date(`November 19 2020 00:00:00`);

  const days = document.querySelector('#days');
  const hours = document.querySelector('#hours');
  const minutes = document.querySelector('#minutes');
  const seconds = document.querySelector('#seconds');

  const currentTime = new Date();

  const leftTime = releaseDate - currentTime;

  const daysLeft = Math.floor(leftTime / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(leftTime / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(leftTime / 1000 / 60) % 60;
  const secondsLeft = Math.floor(leftTime / 1000) % 60;

  days.innerText = daysLeft;
  hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

setInterval(updateCounter, 1000);