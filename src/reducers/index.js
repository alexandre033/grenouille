import {combineReducers} from 'redux';
import reducerCurrentCityWeather from './reducer_city_weather';
import reducerForecastCityWeather from './reducer_city_forecast';
import reducerHourlyCityWeather from './reducer_city_hourly';

const rootReducers = combineReducers({
	city: reducerCurrentCityWeather,
	forecast: reducerForecastCityWeather,
	hourly : reducerHourlyCityWeather
});

export default rootReducers; 