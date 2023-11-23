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
