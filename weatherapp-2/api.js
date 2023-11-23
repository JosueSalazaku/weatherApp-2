import API from "./config";

const getWeatherData = async (cityName) => {
	const url =
		"http://api.weatherapi.com/v1/current.json?key=" +
		API.key +
		"&q=" +
		cityName +
		"&aqi=yes";

	const response = await fetch(url);
	const data = await response.json();
	return data;
};

export { getWeatherData };
