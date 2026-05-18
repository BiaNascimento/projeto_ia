export async function getCityCoordinates(cityName) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=pt&format=json`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("Cidade não encontrada.");
  }

  const city = data.results[0];

  return {
    name: city.name,
    country: city.country,
    latitude: city.latitude,
    longitude: city.longitude
  };
}