import axios from 'axios';

//const API_KEY = "e7e4ad53ecb94495e16fbd6371e7b22f";
const API_KEY = "4076f0195bc5431a";
const URL_CONDITIONS = `https://api.wunderground.com/api/${API_KEY}/conditions/q/`;
const URL_FORECAST = `https://api.wunderground.com/api/${API_KEY}/forecast10day/q/`;
const URL_HOURLY = `https://api.wunderground.com/api/${API_KEY}/hourly/q/`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_FORECAST = 'FETCH_FORECAST';
export const FETCH_HOURLY = 'FETCH_HOURLY';


//Fetch for current city weather
export function fetchWeather(lat, long){

	const url = `${URL_CONDITIONS}${lat},${long}.json`;
	const request =  axios.get(url)

	return {
		type : FETCH_WEATHER,
		payload : request
	}
}

export function fetchForecast(lat, long){

	const url = `${URL_FORECAST}${lat},${long}.json`;
	const request =  axios.get(url);
	return {
		type : FETCH_FORECAST,
		payload : request
	}
}

export function fetchHourly(lat, long){

	const url = `${URL_HOURLY}${lat},${long}.json`;
	console.log(url)
	const request =  axios.get(url)
	return {
		type : FETCH_HOURLY,
		payload : request
	}
}