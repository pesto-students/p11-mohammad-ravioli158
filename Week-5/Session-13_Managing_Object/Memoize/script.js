// Dummy data
const temperatureData = {
  "New York": 20,
  London: 18,
  Paris: 22,
  Tokyo: 25,
  Sydney: 28,
};

function getTemperatureForCity(cityName) {
  // cache to store resutls
  const cache = new Map();
  return (cityName) => {
    //check cache if value it is already stored
    if (cache.has(cityName)) {
      console.log("Rerieved from cache");
      return cache.get(cityName);
    } else {
      // get data from source and add to cache
      cache.set(cityName, temperatureData[cityName]);
      return temperatureData[cityName];
    }
  };
}
const getTemperature = getTemperatureForCity();
const temperature1 = getTemperature("New York");
console.log(temperature1); // 20
const temperature2 = getTemperature("New York");
console.log(temperature2); // 20 (retrieved from cache)
const temperature3 = getTemperature("London");
console.log(temperature3); // 18
const temperature4 = getTemperature("London");
console.log(temperature4); // 18 (retrieved from cache)
