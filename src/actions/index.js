import axios from 'axios';

const API_KEY = "e7e4ad53ecb94495e16fbd6371e7b22f";
const API_KEY2 = "4076f0195bc5431a";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?q=`;
const URL_FORECAST = `http://api.wunderground.com/api/${API_KEY2}/forecast10day/q/`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_FORECAST = 'FETCH_FORECAST';

//Fetch for current city weather
export function fetchWeather(city){

	const url = `${ROOT_URL}${city},fr&units=metric&appid=${API_KEY}`;
	const request =  axios.get(url);
	return {
		type : FETCH_WEATHER,
		payload : request
	}
}

export function fetchForecast(city){

	const url = `${URL_FORECAST}FR/${city}.json`;
	const request =  axios.get(url);
	return {
		type : FETCH_FORECAST,
		payload : request
	}
}