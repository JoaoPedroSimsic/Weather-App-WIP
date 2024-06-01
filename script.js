const enter = document.querySelector("#inputCity");
enter.addEventListener("keypress", function (press) {
  if (press.key === "Enter") {
    Weather();
  }
});

function Weather() {
  const button = document.querySelector("#submitButton");
  const inputValue = document.querySelector("#inputCity");
  const name = document.querySelector(".name");
  const mainWeather = document.querySelector(".mainWeather");
  const desc = document.querySelector(".desc");
  const temp = document.querySelector(".temp");
  const img = document.querySelector(".weatherImg");
  const feelsLike = document.querySelector(".feelsLike");
  const humidity = document.querySelector(".humidity");
  const tempMin = document.querySelector(".tempMin");
  const tempMax = document.querySelector(".tempMax");

  const API =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    inputValue.value +
    "&appid=21766a7387ca563083c678a59af12408";
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      const nameValue = data["name"];
      const tempValue = data["main"]["temp"];
      const weatherValue = data["weather"][0]["main"];
      const descValue = data["weather"][0]["description"];
      const feelsLikeValue = data["main"]["feels_like"];
      const humidityValue = data["main"]["humidity"];
      const tempMinValue = data["main"]["temp_min"];
      const tempMaxValue = data["main"]["temp_max"];
      const convTempC = tempValue - 273.15;
      const convTempF = ((tempValue - 273.15) * 9) / 5 + 32;
      console.log(data);

      name.innerHTML = nameValue;
      temp.innerHTML = Math.round(convTempC) + "°";
      mainWeather.innerHTML = weatherValue;
      desc.innerHTML = descValue;
      img.src = "img/" + weatherValue + ".png";
      feelsLike.innerHTML = feelsLikeValue;
      humidity.innerHTML = humidityValue;
      tempMin.innerHTML = tempMinValue;
      tempMax.innerHTML = tempMaxValue;
    })
    .catch((err) => alert("Any city found"));
}
