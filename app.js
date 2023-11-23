import { getWeatherData } from "./api"
import { country, forecastCards } from "./main";
import { currentTemp } from "./main"
import { weatherImg } from "./main";
import { condition } from "./main";
import { inputField } from "./main";
import forecastDisplay from "./display";


const startWeatherApp = async () => {
	const cityName = inputField.value;
	try {
		const country = document.querySelector("#country");
		const getData = await getWeatherData(cityName);
		console.log("get all the data", getData);


		if (getData.location) {
			const { lat, lon } = getData.location;
			const city = getData.location.name;
			const Country = getData.location.country;
			const temperature = getData.current.temp_c;
			const tempText = getData.current.condition.text;
			const iconUrl = getData.current.condition.icon;

			country.innerHTML = `${city}, ${Country}`;
			currentTemp.innerHTML = `${temperature} °C`
			condition.innerHTML = `${tempText}`

			const iconImg = document.createElement("img");
			iconImg.src = `http:${iconUrl}`;
			iconImg.alt = "Weather Icon"

			weatherImg.innerHTML = ""
			weatherImg.appendChild(iconImg);
			forecastDisplay

		}
	} catch (error) {
		alert("Something is wrong, check error message");
		console.error("Error fetching data", error);
	}
};

export default startWeatherApp;
