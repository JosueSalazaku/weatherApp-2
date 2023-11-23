import getWeatherData from "./api";
import { country } from "./main";
import { currentTemp } from "./main"
const inputField = document.querySelector("#input-location");


const startWeatherApp = async () => {
	const cityName = inputField.value;
	try {
		const country = document.querySelector("#country");
		const getData = await getWeatherData(cityName);
		console.log("get all the data", getData);

		if (getData.location) {
			const { lat, lon } = getData.location;
			const city = getData.location.name
			const Country = getData.location.country
			console.log("City:", city);
			console.log("Country:", Country);

			// Update city and country in the HTML
			country.innerHTML = `${city}, ${Country}`;
			currentTemp.innerHTML = `Temp: ${getData.current.temp_c} °C <br> ${getData.current.condition.text}`

		}
	} catch (error) {
		alert("Something is wrong, check error message");
		console.error("Error fetching data", error);
	}
};

export default startWeatherApp;
