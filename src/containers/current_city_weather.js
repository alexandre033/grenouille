import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import OilTemperatureIcon from 'mdi-react/OilTemperatureIcon';
import WeatherWindyIcon from 'mdi-react/WeatherWindyIcon';
import WaterPercentIcon from 'mdi-react/WaterPercentIcon';
import WeatherIcons from '../components/weather_icons';


class CityWeather extends Component{

	renderCurrent(current, dataForecast){

		//vérification de la taille de l'objet afin d'éviter les undefined
		if(Object.keys(current).length > 0 && Object.keys(dataForecast).length > 0){

			const conditions = current.current_observation
			const forec = dataForecast.map(weather => weather.forecast.simpleforecast.forecastday)		
			return (
				<div id="currentWeather">
					<div className="col-md-4 col-md-offset-4">
						<h3>{conditions.display_location.city}</h3>
						<WeatherIcons weatherTypes={conditions.icon} />
						<span className="temp">{conditions.temp_c}°</span>
						{conditions.weather}
					</div>
					<div className="col-md-4 col-md-offset-4">
						<ul className="weather-list">
							<li><span><WaterPercentIcon/></span>{forec[0][0].avehumidity}%</li>
							<li><span><OilTemperatureIcon/></span>{forec[0][0].high.celsius}° {forec[0][0].low.celsius}° </li>
							<li><span><WeatherWindyIcon/></span>{forec[0][0].avewind.kph}</li>
						</ul>
					</div>
				</div>
			)
		}
	}

	render(){
		const {current, forecast} = this.props;
		return(<div>
			{this.renderCurrent(current, forecast)}
			</div>)		
	}
}


function mapToStateToProps(state){
	return{
		current: state.city,
		forecast : state.forecast

	}
}

export default connect(mapToStateToProps)(CityWeather)