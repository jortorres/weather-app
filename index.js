const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () =>{
    const APIKEY = '02678db4a29f2ce1f86407c5faaed2e1';
    const city = document.querySelector('.search-box input').value;

    if(city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?${city}&units=metric&appid=${APIKEY}`).then(response => response.json()).then
    (json => {

        if(json.cod === '404'){
            container.computedStyleMap.height = '400px';
            weatherBox.computedStyleMap.display = 'none';
            weatherDetails.computedStyleMap.display = 'none';
            error404.computedStyleMap.display = 'block'
            error404.classList.add('fadeIn');
            return

        }
        error404.computedStyleMap.display = 'block'
        error404.classList.add('fadeIn');



    })


})