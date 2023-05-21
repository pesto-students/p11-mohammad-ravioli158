async function getExchangeRate(currencyCode) {
  try {
    //fetch and read json data
    const rateData = await fetch("https://api.exchangerate.host/latest");
    const jsonData = await rateData.json().catch((error) => {
      throw new Error("Unable to parse json data");
    });
    // success key is true when api request is successfull. throw when it is not
    if (jsonData.success !== true) {
      throw new Error("Unable to fetch Rates");
    }
    const rates = jsonData.rates;
    // if there is rate for given currency return it
    if (rates[currencyCode]) {
      const exchangerate = Number(rates[currencyCode]);
      if (isNaN(exchangerate)) {
        return null;
      }
      //round the rate to 4 decimal places
      return exchangerate.toFixed(4);
    } else {
      // if rate is not there for given currency return null
      return null;
    }
  } catch (error) {
    // throw error if fetching or parsing json fails
    throw new Error("Unable to get rates");
  }
}

// Test successfull Case
getExchangeRate("BTC")
  .then((rate) => console.log(rate))
  .catch((error) => console.log(error));

// Test invalid Currency
getExchangeRate("PIkachu")
  .then((rate) => console.log(rate))
  .catch((error) => console.log(error));
