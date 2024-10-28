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
let city = document.querySelector("#city");
let errorText = document.querySelector("#error");
let lowerDiv = document.querySelector(".lower-div");

lowerDiv.style.display = "none";

async function getWeatherData() {
  let cityValue = document.querySelector("#city-input");
  console.log(cityValue);
  let qeury = cityValue.value;

  if (qeury != "") {
    errorText.textContent = "";
    let response = await fetch(
      `${api.base}weather?q=${qeury}&units=metric&APPID=${api.key}`
    );

    let data = await response.json();

    lowerDiv.style.display = "block";
    if (data.message == "city not found") {
      errorText.innerHTML = `${data.message}`;
      lowerDiv.style.display = "none";
    }
    console.log(data);

    temp.innerHTML = ` ${Math.round(data.main.temp)}`;
    humidity.innerHTML = ` ${data.main.humidity}`;
    ws.innerHTML = ` ${data.wind.speed}`;
    city.innerHTML = `${data.name}`;

    if (data.weather[data.weather.length - 1].main == "Clouds") {
      weatherIcon.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/128/13169/13169712.png"
      );
    }

    if (data.weather[data.weather.length - 1].main == "Rains") {
      weatherIcon.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/128/13169/13169712.png"
      );
    }

    if (data.weather[data.weather.length - 1].main == "Clear") {
      weatherIcon.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/128/13169/13169712.png"
      );
    }
  } else {
    errorText.textContent = "please enter a city";
  }
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeatherData();
});
