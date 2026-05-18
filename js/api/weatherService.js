export async function getCurrentTemperature(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&timezone=auto`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    temperature: data.current.temperature_2m,
    unit: data.current_units.temperature_2m
  };
}