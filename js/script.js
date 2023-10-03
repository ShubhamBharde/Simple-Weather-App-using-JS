const apiKey = "c1beb1e8dfb9d8c7e83ce3bc1d9d3811";
const endPoint = "api.openweathermap.org";

const searchBtn = document.querySelector('.search-btn');
const searchCity = document.getElementById('search-city');

const cityName = document.querySelector('.city-name');
const cityTemp = document.querySelector('.city-temp');
const humidity = document.querySelector('.humidity-details span');
const windSpeed = document.querySelector('.wind-details span');

searchBtn.addEventListener('click', function () {
    const cityInput = searchCity.value;
    searchCity.value = null;
    fetchDetails(cityInput);
});

function fetchDetails(cityName) {
    fetch(`https://${endPoint}/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            placedRealValues(data)
        })
        .catch(err => console.log('Error :-', err))
}

function placedRealValues(output) {
    cityName.innerText = output.name;
    cityTemp.innerHTML = `${output.main.temp}<sup>°</sup>c`;
    humidity.innerText = `${output.main.humidity} %`;
    windSpeed.innerText = `${output.wind.speed} km/h`;
}




// `https://${endPoint}/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`