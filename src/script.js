function updateTime() {
  let cityElement = document.querySelector("#los-angeles");
  let cityDateElement = cityElement.querySelector(".cityDate");
  let cityTimeElement = cityElement.querySelector(".cityTime");
  let cityMoment = moment.tz("America/Los_Angeles");
  cityDateElement.innerHTML = cityMoment.format("MMMM  Do  YYYY");
  cityTimeElement.innerHTML = cityMoment.format(`h:mm:ss [<small>]A[</small>]`);

  let secCityElement = document.querySelector("#paris");
  let secCityDateElement = secCityElement.querySelector(".cityDate");
  let secCityTimeElement = secCityElement.querySelector(".cityTime");
  let secCityMoment = moment.tz("Europe/Paris");
  secCityDateElement.innerHTML = secCityMoment.format("MMMM  Do  YYYY");
  secCityTimeElement.innerHTML = secCityMoment.format(
    `h:mm:ss [<small>]A[</small>]`,
  );

  let localCityElement = document.querySelector("#local-city");
  let localCityDateElement = localCityElement.querySelector(".cityDate");
  let localCityTimeElement = localCityElement.querySelector(".cityTime");
  let localCityNameElement = localCityElement.querySelector(".cityName");
  let localTimezone = moment.tz.guess();
  let localCityMoment = moment().tz(localTimezone);
  let cityName = localTimezone.split("/")[1].replace("_", " ");
  localCityNameElement.innerHTML = cityName;
  localCityDateElement.innerHTML = localCityMoment.format("MMMM  Do  YYYY");
  localCityTimeElement.innerHTML = localCityMoment.format(
    `h:mm:ss [<small>]A[</small>]`,
  );
}
setInterval(updateTime, 1000);
