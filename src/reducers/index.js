import {combineReducers} from 'redux';
import reducerCurrentCityWeather from './reducer_city_weather';
import reducerForecastCityWeather from './reducer_city_forecast';

const rootReducers = combineReducers({
	city: reducerCurrentCityWeather,
	forecast: reducerForecastCityWeather
});

export default rootReducers; 