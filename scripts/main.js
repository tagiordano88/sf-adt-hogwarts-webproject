document.querySelector(".submit").addEventListener("click", function() {
    getWeather(document.querySelector(".city").value)

});

function getWeather(cityName) {
    fetch('https://goweather.herokuapp.com/weather/' + cityName)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            const temp = data.temperature;
            const wind = data.wind;
            const description = data.description;
            buildWeather(temp, wind, description);
        })
}

function buildWeather(temp, wind, description) {
    //temp = temp * 1.8 + 32;
    console.log(temp, wind, description);
    const tempC = temp.replace(/[^0-9]/g, '');
    const tempF = tempC * 1.8 + 32 + " F";

    console.log(tempF);

    document.querySelector('.forcast').innerHTML = "this is our forecast";




}