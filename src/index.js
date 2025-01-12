import './styles.css';
import { getWeather, processWeather, getRequiredWeatherInfo } from './get-weather';
import { renderWeatherInfo, convertToFahrenheit, convertToCelsius } from './dom-manipulator';
import { getAppropriateGif } from './weather-gifs';

const inputEl = document.querySelector('input');
const enterBtn = document.querySelector('button');
const loadingComponent = document.querySelector('.loading-component');
const locationInfoDiv = document.querySelector('.location-info');
const weatherInfoDiv = document.querySelector('.weather-info');
const celsiusBtn = document.querySelector('.temp>button');
const fahrenheitBtn = document.querySelectorAll('.temp>button')[1];
const loadingComponentImages = loadingComponent.querySelectorAll('img');

let requiredWeatherInfo;
let location;

enterBtn.addEventListener('click', async () => {
  if ((!inputEl.value) || (location === inputEl.value)) return;
  location = inputEl.value;
  locationInfoDiv.setAttribute('class', 'location-info hide');
  weatherInfoDiv.setAttribute('class', 'weather-info hide');
  [...loadingComponentImages].slice(1).forEach(loadingComponentImage => {
    loadingComponentImage.setAttribute('class', 'hide');
  });
  loadingComponent.setAttribute('class', 'loading-component');
  loadingComponentImages[0].setAttribute('class', '');
  const weather = await getWeather(location);
  if (weather === undefined) {
    loadingComponentImages[0].setAttribute('class', 'hide');
    loadingComponentImages[2].setAttribute('class', '');
  } else if (!weather.ok) {
    loadingComponentImages[0].setAttribute('class', 'hide');
    loadingComponentImages[1].setAttribute('class', '');
  } else {
    const processedWeather = await processWeather(weather);
    requiredWeatherInfo = getRequiredWeatherInfo(processedWeather);
    const gif = await getAppropriateGif(requiredWeatherInfo.conditions);
    const gifURL = gif.data.images.original.url;
    loadingComponent.setAttribute('class', 'loading-component hide');
    locationInfoDiv.setAttribute('class', 'location-info');
    renderWeatherInfo(location, requiredWeatherInfo, gifURL);
    weatherInfoDiv.setAttribute('class', 'weather-info');
    celsiusBtn.setAttribute('class', 'greyed-out');
    fahrenheitBtn.setAttribute('class', '');
  }
});

fahrenheitBtn.addEventListener('click', (e) => {
  convertToFahrenheit(e, requiredWeatherInfo);
});

celsiusBtn.addEventListener('click', (e) => {
  convertToCelsius(e, requiredWeatherInfo);
});