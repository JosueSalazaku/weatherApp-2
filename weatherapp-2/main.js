import "./style.css";
// import API from "./config";

const currentTemp = document.querySelector("#currentTemp");
const inputField = document.querySelector("#input-location");
const country = document.querySelector("#country");
const fetchBtn = document.querySelector("#fetch-btn");
const forcast = document.querySelector("#forecast");

const daysOfTheWeek = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

const getGeoData = async () => {
	const url = "https://api.weatherapi.com/v1/current.json?q=london";
	console(url);
};
