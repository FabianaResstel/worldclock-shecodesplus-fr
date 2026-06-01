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
}

function updateCity(event) {
  let timezone = event.target.value;
  let cityMoment = moment.tz(timezone);
  let cityName = timezone.split("/")[1].replace("_", " ");

  let cityElement = document.querySelector("#local-city");
  cityElement.querySelector(".cityName").innerHTML = cityName;
  cityElement.querySelector(".cityDate").innerHTML =
    cityMoment.format("MMMM  Do  YYYY");
  cityElement.querySelector(".cityTime").innerHTML = cityMoment.format(
    `h:mm:ss [<small>]A[</small>]`,
  );
}

updateTime();
setInterval(updateTime, 1000);
let selectCityElement = document.querySelector("#select-city");
selectCityElement.addEventListener("change", updateCity);
