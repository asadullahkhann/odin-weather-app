const locationInfoPara = document.querySelector('.location-info>p');
const weatherInfoParas = [...document.querySelectorAll('.text>p')].slice(2);
const tempSpan = document.querySelector('span');
const gifContainer = document.querySelectorAll('.gif')[1];
const gifImg = document.createElement('img');

function renderWeatherInfo(location, weatherinfo, gifURL) {
  locationInfoPara.textContent = `${location[0].toUpperCase()}${location.slice(1)}`;
  tempSpan.textContent = Math.ceil(weatherinfo.temp);
  weatherInfoParas[0].textContent = `Feels like ${weatherinfo.feelslike}°`;
  weatherInfoParas[1].textContent = weatherinfo.conditions;
  weatherInfoParas[2].textContent = `Humidity: ${weatherinfo.humidity}%`;
  weatherInfoParas[3].textContent = `Wind: ${weatherinfo.windspeed} mph`;
  gifImg.src = gifURL;
  while (gifContainer.firstChild) {
    gifContainer.removeChild(gifContainer.firstChild);
  }
  gifContainer.appendChild(gifImg);
};

function convertToFahrenheit(event, weatherInfo) {
  const fahrenheit = Math.ceil(weatherInfo.temp);
  const feelslike = weatherInfo.feelslike;
  tempSpan.textContent = fahrenheit;
  event.target.previousSibling.previousSibling.setAttribute('class', 'greyed-out');
  event.target.setAttribute('class', '');
  weatherInfoParas[0].textContent = `Feels like ${feelslike}°`;
  weatherInfoParas[3].textContent = `Wind: ${weatherInfo.windspeed} mph`;
}

function convertToCelsius(event, weatherInfo) {
  const celsius = (weatherInfo.temp - 32) * 5/9;
  const feelslike = Math.ceil((weatherInfo.feelslike - 32) * 5/9);
  const windspeedInKMH = Math.ceil(weatherInfo.windspeed * 1.60934);
  tempSpan.textContent = Math.ceil(celsius);
  weatherInfoParas[0].textContent =  `Feels like ${feelslike}°`;
  weatherInfoParas[3].textContent = `Wind: ${windspeedInKMH} km/h`;
  event.target.nextSibling.nextSibling.setAttribute('class', 'greyed-out');
  event.target.setAttribute('class', '');
}

export { renderWeatherInfo, convertToFahrenheit, convertToCelsius };