


function getWeather() {
    // username-1
    // username-2
    // var gitHubVal_1 = document.getElementById('username-1').value;
    // var gitHubVal_2 = document.getElementById('username-2').value;
    let cityName = 'phoenix';
    console.log(cityName);

}

function getWeatherID(cityName) {
    fetch('https://goweather.herokuapp.com/weather/' + cityName)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const temp = data.temperature;
            const wind = data.wind;
            const description = data.description;
            buildWeather(temp, wind, description);
        }
        )
}

function buildWeather(temp, wind, description) {
    //temp = temp * 1.8 + 32;
    console.log(typeof (temp))
    console.log(temp, wind, description);
}

getWeatherID('phoenix');

// {  
//     "temperature":"29 °C",
//     "wind":"20 km/h",
//     "description":"Partly cloudy",
//     "forecast":[  
//        {  
//           "day":1,
//           "temperature":"27 °C",
//           "wind":"12 km/h"
//        },
//        {  
//           "day":2,
//           "temperature":"22 °C",
//           "wind":"8 km/h"
//        }
//     ]
//  }

// Formula	for Celsius to Fahrenheit
// (0°C × 9/5) + 32 = 32°F

