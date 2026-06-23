import './styles.css';
import { getWeather, getRequiredWeatherInfo } from './weather';
import { 
  renderWeatherInfo, 
  renderInFahrenheit, 
  renderInCelsius,
  renderError
} from './dom-manipulator';

const inputEl = document.querySelector('input');
const searchBtn = document.querySelector('button');
const searchBtnLabel = document.querySelector('button > span');
const spinnerSpan = document.querySelector('.spinner');
const statusSpan = document.querySelector('span#status');
const celsiusBtn = document.querySelector('.celsius-btn');
const fahrenheitBtn = document.querySelector('.fahrenheit-btn');

let requiredWeatherInfo = {};

const showWeather = async () => {
  if (!inputEl.value) return;
  if (inputEl.value === requiredWeatherInfo.address) return;
  let location = inputEl.value;
  searchBtnLabel.classList.add('hide');
  spinnerSpan.classList.remove('hide');
  searchBtn.disabled = true;
  statusSpan.textContent = 'Loading, please wait';
  let response = await getWeather(location);
  if (response === 'Failed to fetch') renderError('No internet connection.');
  else if (response.status === 400) renderError('Invalid address');
  else if (!response.ok) renderError('Something went wrong.');
  else {
    response = await response.json();
    requiredWeatherInfo = getRequiredWeatherInfo(response);
    renderWeatherInfo(requiredWeatherInfo);
  }
  console.log(response);  
  spinnerSpan.classList.add('hide');
  searchBtnLabel.classList.remove('hide');
  searchBtn.disabled = false;
};

searchBtn.addEventListener('click', showWeather);

fahrenheitBtn.addEventListener('click', () => {
  renderInFahrenheit(requiredWeatherInfo);
});

celsiusBtn.addEventListener('click', () => {
  renderInCelsius(requiredWeatherInfo);
});

window.addEventListener('load', showWeather);