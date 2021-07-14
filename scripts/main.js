document.querySelector(".submit").addEventListener("click", function () {
    getWeather(document.querySelector(".city").value)

});

function getWeather(cityName) {
    fetch('https://goweather.herokuapp.com/weather/' + cityName)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            const temp = data.temperature;
            const wind = data.wind;
            const description = data.description;
            buildWeather(temp, wind, description);
        }).catch((error) => {

            return window.alert('Sorry, you city is not in our database');
        });
}
function buildWeather(temp, wind, description) {
    //temp = temp * 1.8 + 32;
    //console.log(temp, wind, description);
    const tempC = temp.split(' ')[0];
    const tempF = (tempC * 1.8 + 32).toFixed(1) + " F";
    const city = document.querySelector(".city").value;
    const firstName = document.querySelector(".userName").value;

    let forcastDiv = document.getElementById('forcast');
    let forcastP = forcastDiv.querySelector('p');
    forcastP.innerText = `Hi ${firstName}! Currently, in ${city}, it is ${description.toLowerCase()} and ${tempF}. The wind speed is ${wind}.`;
    forcastDiv.classList.remove('hide');
}