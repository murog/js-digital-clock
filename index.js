$( document ).ready(function(){ // make arrow function
  setInterval('updateClock()', 1000);
});

function updateClock(timeZone = null) {
  const timeOffset = (timeZone === null) ? 0 : timeZone
  const now = new Date();
  console.log(now);
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentSeconds = now.getSeconds();
  getTimeString(currentHours, currentMinutes, currentSeconds);
  setDate(now);
}

function getTimeString(currentHours, currentMinutes, currentSeconds) {
  const timeOfDay = (currentHours > 12) ? 'PM' : 'AM';
  let hours = (currentHours > 12) ? currentHours - 12 : currentHours;
  hours = (currentHours === 0) ? 12 : currentHours;
  const minutes = (currentMinutes < 10) ? `0${currentMinutes}` : currentMinutes;
  const seconds = (currentSeconds < 10) ? `0${currentSeconds}` : currentSeconds;
  const currentTimeString = `${hours}:${minutes}:${seconds} ${timeOfDay}`;
  $('#clock').html(currentTimeString);
}

function setDate(date) {
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dateString = `${month}-${day}-${year}`;
  $('#date').html(dateString);
}
