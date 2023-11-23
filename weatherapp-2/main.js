import "./style.css";
import API from "./config";
import startWeatherApp from "./app";

export const currentTemp = document.querySelector("#currentTemp");
const inputField = document.querySelector("#input-location");
export const country = document.querySelector("#country");
const fetchBtn = document.querySelector(".fetch-btn");
const forecast = document.querySelector("#forecast");

const daysOfTheWeek = [
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
