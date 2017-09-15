import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import CurrentCityWeather from '../containers/current_city_weather';
import ForecastCityWeather from '../containers/forecast_city_weather';
import HourlyCityWeather from '../containers/hourly_city_weather';



export default class App extends Component{
	render(){
		return(
			<div>
				<div className="jumbotron">
					<div className="container">
						<SearchBar/>
						<CurrentCityWeather />
					</div>
				</div>
				<div className="container" id="hourly">
						<HourlyCityWeather/>
					</div>
					<div className="container" id="forecast">
						<ForecastCityWeather/>
					</div>
				
			</div>
			)
	}
}