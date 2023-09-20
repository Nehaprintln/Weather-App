// fetch data from API
const apiKey = '1d95467628084f7fe0efac1a5c4fcd7f';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const weatherImage = document.querySelector('.weather-icon');
async function checkWeather(cityName){
    const response = await fetch(apiUrl  + cityName +  `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    const city = document.querySelector('.city');
    city.innerHTML = data.name;
    const temp = document.querySelector('.temp');
    temp.innerHTML = Math.round(data.main.temp) + '°c';
    const humidity = document.querySelector('.humidity');
    humidity.innerHTML = data.main.humidity + '%';
    const wind = document.querySelector('.wind');
    wind.innerHTML = data.wind.speed + ' km/h';

   
    if(data.weather[0].main == 'Clouds'){      
        weatherImage.src = './image/cloudy.png';
    }else if(data.weather[0].main == 'Clear'){
        weatherImage.src = './image/clear.png';
    }else if(data.weather[0].main == 'Rain'){
        weatherImage.src = './image/rain.avif';
    }else if(data.weather[0].main == 'Drizzle'){
        weatherImage.src = './image/rain.avif';
    }else if(data.weather[0].main == 'Mist'){
        weatherImage.src = './image/mist.png';
    }

    searchBox.value = "";

    
}
searchBtn.addEventListener('click', () =>{
    // console.log('h');
    // alert('hello');
    checkWeather(searchBox.value);
})
//  above code checWeather take argument as city name which we pass inside searchBtn event.
// look carefull code of async checkWheather apiUrl + city + ${}
// 