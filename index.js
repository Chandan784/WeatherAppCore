const api = {
  key: "94592d1762796490b9526de61473fdb6",
  base: "https://api.openweathermap.org/data/2.5/",
};

let searchBtn = document.querySelector("#search-icon");
let cityValue = document.querySelector("#city-input").value;

let temp = document.querySelector("#tempreature");
let ws = document.querySelector("#windspeed");
let humidity = document.querySelector("#humidity");
let weatherIcon = document.querySelector("#wether-icon");

async function getWeatherData() {
  let cityValue = document.querySelector("#city-input");
  console.log(cityValue);
  let qeury = cityValue.value;

  let response = await fetch(
    `${api.base}weather?q=${qeury}&units=metric&APPID=${api.key}`
  );

  let data = await response.json();

  console.log(data);

  temp.innerHTML = ` ${data.main.temp}`;
  humidity.innerHTML = ` ${data.main.humidity}`;
  ws.innerHTML = ` ${data.wind.speed}`;

  if (data.weather[data.weather.length - 1].main == "Clouds") {
    weatherIcon.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/128/13169/13169712.png"
    );
  }

  if (data.weather[data.weather.length - 1].main == "rains") {
    weatherIcon.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/128/13169/13169712.png"
    );
  }
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeatherData();
});
