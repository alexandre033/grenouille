import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import CurrentCityWeather from '../containers/current_city_weather';
import ForecastCityWeather from '../containers/forecast_city_weather';
import ChartsHourly from '../containers/charts_hourly';
import ChartsForecast from '../containers/charts_forecast';



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
				<div className="jumbotron" id="hourly">
					<div className="container" >
							<ChartsHourly/>
							<ChartsForecast/>
					</div>
				</div>
					<div className="container" id="forecast">
						<ForecastCityWeather/>
					</div>
				
			</div>
			)
	}
}