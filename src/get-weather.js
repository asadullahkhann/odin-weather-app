async function getWeather(location) {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=MCLJCAXDNQF9KKTXDQNEC63JL`);
    return response;
  }
  catch(err) {
    console.error(err.message);
  }
};

async function processWeather(weather) {
  const processedWeather = await weather.json();
  return processedWeather;
};

function getRequiredWeatherInfo(processedWeather) {
  const {address, currentConditions} = processedWeather;
  const {
    conditions,
    feelslike,
    humidity,
    temp,
    windspeed
  } = currentConditions;
  return {
    address, 
    conditions,
    feelslike,
    humidity,
    temp,
    windspeed, 
  };
};

export { getWeather, processWeather, getRequiredWeatherInfo };