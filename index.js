const api = {
  key: "94592d1762796490b9526de61473fdb6",
  base: "https://api.openweathermap.org/data/2.5/",
};

let searchBtn = document.querySelector("#search-icon");
let cityValue = document.querySelector("#city-input").value;

async function getWeatherData() {
  let cityValue = document.querySelector("#city-input");
  console.log(cityValue);
  let qeury = cityValue.value;

  let response = await fetch(
    `${api.base}weather?q=${qeury}&units=metric&APPID=${api.key}`
  );

  let data = await response.json();

  console.log(data);

  return data;
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeatherData();
});
