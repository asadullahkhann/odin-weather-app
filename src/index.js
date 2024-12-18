const inputEl = document.querySelector('input');
const enterBtn = document.querySelector('button');

async function getWeather(location) {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=MCLJCAXDNQF9KKTXDQNEC63JL`);
  return response;
};

async function processWeather(weather) {
  const processedWeather = await weather.json();
  return processedWeather;
};

function getRequiredWeatherInfo(processedWeather) {
  const {address, currentConditions, description} = processedWeather;
  const {
    conditions,
    datetime,
    feelslike,
    humidity,
    sunrise,
    sunset,
    temp,
    windspeed
  } = currentConditions;
  return {
    address, 
    conditions,
    datetime,
    feelslike,
    humidity,
    sunrise,
    sunset,
    temp,
    windspeed, 
    description
  };
};

enterBtn.addEventListener('click', async () => {
  const location = inputEl.value;
  const weather = await getWeather(location);
  const processedWeather = await processWeather(weather);
  const requiredWeatherInfo = getRequiredWeatherInfo(processedWeather);
  console.log(requiredWeatherInfo);
});
