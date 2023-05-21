window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  // get elements from the DOM
  const convertButton = document.getElementById("convertButton");
  const cInput = document.getElementById("cInput");
  const fInput = document.getElementById("fInput");
  const errorMessage = document.getElementById("errorMessage");
  const weatherImage = document.getElementById("weatherImage");
  //   allow only one input to contain value, clear the other
  cInput.addEventListener("change", () => {
    //clear other
    fInput.value = "";
  });
  fInput.addEventListener("change", () => {
    //clear other
    cInput.value = "";
  });
  // add event listener to the convert button
  if (convertButton) {
    convertButton.addEventListener("click", () => {
      errorMessage.innerText = "";
      let fahValue = undefined;
      let cValue = undefined;
      if (cInput && cInput.value !== "") {
        let celsiusValue = parseFloat(cInput.value);

        if (!isNaN(celsiusValue)) {
          fahValue = convertCtoF(celsiusValue);
          //  update value of fahrenheit
          fInput.value = fahValue;
        } else {
          errorMessage.innerText = "Invalid celsius value";
        }
      }
      if (fInput && fInput.value !== "") {
        let fahrenValue = parseFloat(fInput.value);
        if (!isNaN(fahrenValue)) {
          let cValue = convertFtoC(fahrenValue);
          //update value of celsius
          cInput.value = cValue;
        } else {
          errorMessage.innerText = "Invalid celsius value";
        }
      }

      // update weatherImage
      if (fahValue < 32) {
        weatherImage.src = "cold.png";
      } else if (fahValue <= 50) {
        weatherImage.src = "cool.png";
      } else {
        //above 50 and default
        weatherImage.src = "warm.png";
      }
    });
  }
}

function convertCtoF(degreesCelsius) {
  return (degreesCelsius * 9.0) / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
  return ((degreesFahrenheit - 32) * 5.0) / 9;
}
