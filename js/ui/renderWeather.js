export function renderWeather(container, cityName, country, temperature, unit) {
  container.innerHTML = `
    <h2>${cityName}, ${country}</h2>
    <p>Temperatura atual: <strong>${temperature}${unit}</strong></p>
  `;
}

export function renderError(container, message) {
  container.innerHTML = `<p style="color: red;">${message}</p>`;
}