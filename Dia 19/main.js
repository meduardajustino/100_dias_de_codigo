const apiKey = 'hiMCADPKpNz2F9rT'; 
 
const searchBtn = document.getElementById('search-btn'); 
const cityInput = document.getElementById('city'); 
const cityName = document.getElementById('city-name'); 
const weatherDescription = document.getElementById('weather-description'); 
const temperature = document.getElementById('temperature'); 
const humidity = document.getElementById('humidity'); 
const errorMessage = document.getElementById('error-message'); 
 
searchBtn.addEventListener('click', () => { 
    const city = cityInput.value.trim(); 
    if (city) { 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`) 
            .then(response => { 
                if (!response.ok) { 
                    throw new Error('Cidade não encontrada!'); 
                } 
                return response.json(); 
            }) 
            .then(data => { 
                errorMessage.textContent = ''; 
                cityName.textContent = data.name; 
                weatherDescription.textContent = data.weather[0].description; 
                temperature.textContent = ${data.main.temp}°C; 
                humidity.textContent = Humidade: ${data.main.humidity}%; 
            }) 
            .catch(error => { 
                cityName.textContent = ''; 
                weatherDescription.textContent = ''; 
                temperature.textContent = ''; 
                humidity.textContent = ''; 
                errorMessage.textContent = error.message; 
            }); 
    } 
});
