import API from "./config";

const getWeatherData = async (cityName) => {
	const url = "http://api.weatherapi.com/v1/forecast.json?key=" + API.key + "&q=" + cityName + "&days=5&aqi=no&alerts=no"

	const response = await fetch(url);
	const data = await response.json();
	return data;
};

export { getWeatherData };

