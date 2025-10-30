import './styles.css';
import loadingGif from './images/loading-loading-forever.gif';
import searchSvg from './images/search.svg';
import { getWeather, processWeather, getRequiredWeatherInfo } from './get-weather';
import { renderWeatherInfo, convertToFahrenheit, convertToCelsius } from './dom-manipulator';
import { getAppropriateGif } from './weather-gifs';

const inputEl = document.querySelector('input');
const enterBtn = document.querySelector('button');
const loadingComponent = document.querySelector('.error-card');
const weatherInfoDiv = document.querySelector('.weather-card');
const celsiusBtn = document.querySelector('.temp>button');
const fahrenheitBtn = document.querySelectorAll('.temp>button')[1];
const loadingComponentImages = loadingComponent.querySelectorAll('img');

let requiredWeatherInfo;
let location;

const showWeather = async () => {
  if ((!inputEl.value) || (location === inputEl.value)) return;
  location = inputEl.value;
  const loadingImg = document.createElement('img');
  loadingImg.src = loadingGif;
  [...loadingComponentImages].forEach(loadingComponentImage => {
    loadingComponentImage.setAttribute('class', 'hide');
  });
  enterBtn.removeChild(enterBtn.firstChild);
  enterBtn.appendChild(loadingImg);
  enterBtn.removeEventListener('click', showWeather);
  const weather = await getWeather(location);
  if (weather === undefined) {
    weatherInfoDiv.setAttribute('class', 'hide')
    loadingComponentImages[0].setAttribute('class', '');
    loadingComponentImages[1].setAttribute('class', 'hide');
    loadingComponent.setAttribute('class', 'error-card');
    enterBtn.addEventListener('click', showWeather);
    loadingImg.src = searchSvg;
  } else if (!weather.ok) {
    weatherInfoDiv.setAttribute('class', 'hide');
    loadingComponentImages[0].setAttribute('class', 'hide');
    loadingComponentImages[1].setAttribute('class', '');
    loadingComponent.setAttribute('class', 'error-card');
    enterBtn.addEventListener('click', showWeather);
    loadingImg.src = searchSvg;
  } else {
    loadingImg.src = searchSvg;
    enterBtn.addEventListener('click', showWeather);
    const processedWeather = await processWeather(weather);
    requiredWeatherInfo = getRequiredWeatherInfo(processedWeather);
    const gif = await getAppropriateGif(requiredWeatherInfo.icon);
    const gifURL = gif.data.images.original.url;

    renderWeatherInfo(location, requiredWeatherInfo, gifURL);
    weatherInfoDiv.setAttribute('class', 'weather-card');
    celsiusBtn.setAttribute('class', 'greyed-out');
    fahrenheitBtn.setAttribute('class', '');
  }
};

enterBtn.addEventListener('click', showWeather);

fahrenheitBtn.addEventListener('click', (e) => {
  convertToFahrenheit(e, requiredWeatherInfo);
});

celsiusBtn.addEventListener('click', (e) => {
  convertToCelsius(e, requiredWeatherInfo);
});

window.addEventListener('load', showWeather);