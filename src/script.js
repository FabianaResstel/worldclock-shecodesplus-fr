let cityElement = document.querySelector("#los-angeles");
let cityDateElement = cityElement.querySelector(".cityDate");
let cityTimeElement = cityElement.querySelector(".cityTime");
cityDateElement.innerHTML = moment
  .tz("America/Los_Angeles")
  .format("MMMM  Do  YYYY");

cityTimeElement.innerHTML = moment.tz("America/Los_Angeles").format(`h:mm:ss`);

let secCityElement = document.querySelector("#paris");
let secCityDateElement = secCityElement.querySelector(".cityDate");
let secCityTimeElement = secCityElement.querySelector(".cityTime");

secCityDateElement.innerHTML = moment
  .tz("Europe/Paris")
  .format("MMMM  Do  YYYY");
secCityTimeElement.innerHTML = moment.tz("Europe/Paris").format(`h:mm:ss`);
