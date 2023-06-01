function convertTemperature() {
    
    var temperature = parseFloat(document.getElementById("t1").value);
    var fromUnit = document.getElementById("t2").value;
    var toUnit = document.getElementById("t4").value;

    var convertedTemperature;
    if (fromUnit === "Fahrenheit") {
      if (toUnit === "Celsius") {
        convertedTemperature = (temperature - 32) * (5 / 9);
      } else if (toUnit === "Kelvin") {
        convertedTemperature = (temperature - 32) * (5 / 9) + 273.15;
      } else {
        convertedTemperature = temperature;
      }
    } else if (fromUnit === "Celsius") {
      if (toUnit === "Fahrenheit") {
        convertedTemperature = (temperature * 9) / 5 + 32;
      } else if (toUnit === "Kelvin") {
        convertedTemperature = temperature + 273.15;
      } else {
        convertedTemperature = temperature;
      }
    } else if (fromUnit === "Kelvin") {
      if (toUnit === "Fahrenheit") {
        convertedTemperature = (temperature - 273.15) * (9 / 5) + 32;
      } else if (toUnit === "Celsius") {
        convertedTemperature = temperature - 273.15;
      } else {
        convertedTemperature = temperature;
      }
    }
  
    document.getElementById("t3").value = convertedTemperature.toFixed(2);
  }
  
  document.getElementById("t5").addEventListener("click", convertTemperature);