import "./style.css";
import API from "./config";
import startWeatherApp from "./app";

export const currentTemp = document.querySelector("#currentTemp");
export const inputField = document.querySelector("#input-location");
export const country = document.querySelector("#country");
export const fetchBtn = document.querySelector(".fetch-btn");
export const forecast = document.querySelector("#forecast");
export const weatherImg = document.querySelector("#weather-imgs")
export const condition = document.querySelector("#condition")
export const nav = document.querySelector(".nav")
export const timeAndDate = document.querySelector("#time-date")


const options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	hour12: true,
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

export const daysOfTheWeek = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

inputField.addEventListener("keyup", function (event) {
	if (event.key === "Enter") {
		startWeatherApp();
	}
});

fetchBtn.addEventListener("click", startWeatherApp);
