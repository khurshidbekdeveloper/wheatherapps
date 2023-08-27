function getWeather() {
  const apiKey = '843acaabb0b93979f2825fa4abcc1274';
  const city = String(document.getElementById('search-box').value);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  let input=document.querySelector(`input`);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = Math.round(data.main.temp - 273.15);
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      const weatherInfo = `Havo harorati: ${temperature}°C<br>
                           Tavsif: ${description}<br>
                           Namlik darajasi: ${humidity}%<br>
                           Shamol tezligi: ${windSpeed} m/s`;

      document.getElementById('weather-info').innerHTML = weatherInfo;
    })
    .catch(error => {
      console.log(error);
      document.getElementById('weather-info').innerHTML = 'City not found  or  No Internet';
    });
}
