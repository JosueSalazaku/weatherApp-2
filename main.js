import "./style.css";
import API from "./config";

const currentTemp = document.querySelector("#currentTemp");
const inputField = document.querySelector("#input-location");
const country = document.querySelector("#country");
const fetchBtn = document.querySelector(".fetch-btn");
const forecastCards = document.querySelector("#forecast-Card");
const weatherImg = document.querySelector("#weather-imgs")
const condition = document.querySelector("#condition")
const nav = document.querySelector(".nav")
const timeAndDate = document.querySelector("#time-date")


const options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	hour12: false,
};


const updateClock = () => {
	const date = new Date();
	const formattedDate = date.toLocaleString('en-US', options);
	dateDisplay.innerHTML = `${formattedDate}`;
};

const dateDisplay = document.createElement("p");
nav.appendChild(dateDisplay);
updateClock();
setInterval(updateClock, 1000);

const daysOfTheWeek = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];


const getWeatherData = async () => {
	const cityName = inputField.value;
	const url = "http://api.weatherapi.com/v1/forecast.json?key=" + API.key + "&q=" + cityName + "&days=7&aqi=no&alerts=no"

	const response = await fetch(url);
	const data = await response.json();
	return data;
};



const forecastDisplay = async (is_day, cityName) => {


	try {
		const getData = await getWeatherData(cityName);
		const forecastData = getData.forecast.forecastday;

		for (let i = 0; i < forecastData.length; i++) {
			const cards = document.createElement("div");
			cards.classList.add("cards");

			const dayData = forecastData[i];
			const dayOfWeek = daysOfTheWeek[i];
			const iconUrl = dayData.day.condition.icon;
			const temperature = dayData.day.avgtemp_c;
			const tempText = dayData.day.condition.text;

			const dayElement = document.createElement("p");
			dayElement.textContent = dayOfWeek;

			const temperatureElement = document.createElement("p");
			temperatureElement.textContent = `${temperature} °C`;

			const conditionElement = document.createElement("p");
			conditionElement.textContent = tempText;

			const iconImg = document.createElement("img");
			iconImg.src = `http:${iconUrl}`;
			iconImg.alt = "Weather Icon";

			cards.appendChild(dayElement);
			cards.appendChild(iconImg);
			cards.appendChild(temperatureElement);
			cards.appendChild(conditionElement);

			forecastCards.appendChild(cards);
		}
	} catch (error) {
		console.error("Error fetching or displaying data", error);
	}
};



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
			forecastDisplay(null, cityName);
		}
	} catch (error) {
		alert("Something is wrong, check error message");
		console.error("Error fetching data", error);
	}
};

inputField.addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		startWeatherApp();
	}
});

fetchBtn.addEventListener("click", startWeatherApp);
