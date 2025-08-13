async function getAppropriateGif(conditions) {
  conditions = conditions.toLowerCase();
  conditions += ' weather sky'
  console.log(conditions)
  if (conditions.includes(',')) {
    conditions = conditions.split(',')[0];
  }
  if (conditions.includes('night')) {
    conditions += ' national geographic ';
  } else if (conditions.includes('partially')) {
    conditions = conditions.replace('partially', 'Partly');
  }
  console.log(conditions)
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=q7r5GoJBLCiQ2DtH8d7qLfjAIhWW79Ut&s=${conditions}`);
  const parsedResponse = await response.json();
  return parsedResponse;
}

export { getAppropriateGif };