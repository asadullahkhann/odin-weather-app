async function getAppropriateGif(conditions) {
  conditions = conditions.toLowerCase();
  conditions += ' weather'
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=q7r5GoJBLCiQ2DtH8d7qLfjAIhWW79Ut&s=${conditions}`);
  const parsedResponse = await response.json();
  return parsedResponse;
}

export { getAppropriateGif };