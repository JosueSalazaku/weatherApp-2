import getWeatherData from "./api";
import { country } from "./main";
const inputField = document.querySelector("#input-location");


const startWeatherApp = async () => {
	const cityName = inputField.value;
	try {
		const country = document.querySelector("#country");
		const getData = await getWeatherData(cityName);
		console.log("get all the data", getData);

		if (getData.location) {
			const { lat, lon } = getData.location;
			console.log("City:", getData.name);
			console.log("Country:", getData.country);
			const city = getData.location.name
			const Country = getData.location.country

			// Update city and country in the HTML
			country.innerHTML = `${city}, ${Country}`;
		}
	} catch (error) {
		alert("Something is wrong, check error message");
		console.error("Error fetching data", error);
	}
};

export default startWeatherApp;
