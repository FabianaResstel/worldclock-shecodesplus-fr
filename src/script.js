function updateTime() {
  let cityElement = document.querySelector("#los-angeles");
  let cityDateElement = cityElement.querySelector(".cityDate");
  let cityTimeElement = cityElement.querySelector(".cityTime");
  let cityMoment = moment.tz("America/Los_Angeles");
  cityDateElement.innerHTML = moment().format("MMMM  Do  YYYY");

  cityTimeElement.innerHTML = moment
    .tz("America/Los_Angeles")
    .format(`h:mm:ss`);

  let secCityElement = document.querySelector("#paris");
  let secCityDateElement = secCityElement.querySelector(".cityDate");
  let secCityTimeElement = secCityElement.querySelector(".cityTime");
  let secCityMoment = moment.tz("Europe/Paris");
  secCityDateElement.innerHTML = moment().format("MMMM  Do  YYYY");
  secCityTimeElement.innerHTML = moment.tz("Europe/Paris").format(`h:mm:ss`);
}
setInterval(updateTime, 1000);
