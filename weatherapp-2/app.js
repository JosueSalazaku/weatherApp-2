import getWeatherData from "./api";

const inputField = document.querySelector("#input-location");

const startWeatherApp = async () => {
	const cityName = inputField.value;
	try {
		const getData = await getWeatherData(cityName);
		console.log("get all the data", getData);

		if (getData && getData.location) {
			const { lat, lon } = getData.location;
			const weatherData = await getWeatherData(lat, lon);
			console.log("weatherData", weatherData);

			(country.innerHTML = `${getData.name}`), `${getData.country}`;
		}
	} catch (error) {
		alert("Something is wrong, check error message");
		console.error("Error fetching data", error);
	}
};

export default startWeatherApp;
