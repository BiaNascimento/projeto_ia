import { getCityCoordinates } from './api/geocodingService.js';
import { getCurrentTemperature } from './api/weatherService.js';
import { renderWeather, renderError } from './ui/renderWeather.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#city-input');
const resultContainer = document.querySelector('#weather-result');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const cityName = input.value.trim();

  if (!cityName) {
    renderError(resultContainer, 'Digite uma cidade.');
    return;
  }

  resultContainer.innerHTML = '<p>Carregando...</p>';

  try {
    const city = await getCityCoordinates(cityName);
    const weather = await getCurrentTemperature(city.latitude, city.longitude);

    renderWeather(
      resultContainer,
      city.name,
      city.country,
      weather.temperature,
      weather.unit
    );
  } catch (error) {
    renderError(resultContainer, error.message || 'Erro ao buscar dados.');
  }
});