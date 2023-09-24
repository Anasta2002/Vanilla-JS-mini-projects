const api = {
    endpoint: 'https://api.openweathermap.org/data/2.5/',
    key: 'd83d92d8965a67f96c531b0d0dcc7422'
}

const input = document.querySelector('#input');
input.addEventListener('keydown', enter);

function enter (e) {
    if(e.keyCode === 13) {
        getInfo(input.value);
    }
   
}

async function getInfo (data) {
    const res = await (await fetch(`${api.endpoint}weather?q=${data}&appid=${api.key}`))
    const result = await res.json();
    getOurDay();
    displayResult(result);
}

function displayResult (result) {

    document.querySelector('#conditions').textContent = `${result.weather[0].description}`;
    document.querySelector('#degree').innerHTML = `${Math.floor(result.main.temp)}<span>°</span>`;
    document.querySelector('#city').textContent = `${result.name}, ${result.sys.country}`;
    document.querySelector('#feelsLike').innerHTML = `<span>Feels like </span> ${Math.floor(result.main.feels_like)} <span>°</span>`;
    document.querySelector('#varations').innerHTML = `<span>Min</span>${result.main.temp_min}<span>°</span>, <span>Max</span> ${result.main.temp_max}<span>°</span>`;

}

function getOurDay () {
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[today.getDay()];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[today.getMonth()];


    const date = today.getDate();
    const year = today.getFullYear();
    document.querySelector('#data').innerHTML = day + ' ' + date + ' ' + month + ' ' + year;
}