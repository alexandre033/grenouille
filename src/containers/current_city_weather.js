import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import OilTemperatureIcon from 'mdi-react/OilTemperatureIcon';
import WeatherWindyIcon from 'mdi-react/WeatherWindyIcon';
import WaterPercentIcon from 'mdi-react/WaterPercentIcon'


class CityWeather extends Component{

	renderWeather(city){
		//vérification de la taille de l'objet afin d'éviter les undefined
		if(Object.keys(city).length > 0){
			return (
				<div>
				<div className="col-md-4 col-md-offset-4">
					<h3>{city.name}</h3>
					<span className="temp">{Math.round(_.values(city.main)[0])}°</span>
					{city.weather.map(weather => weather.description)}
				</div>
				<div className="col-md-4 col-md-offset-4">
					<ul className="weather-list">
						<li><span><WaterPercentIcon/></span>{Math.round(_.values(city.main)[2])}%</li>
						<li><span><OilTemperatureIcon/></span>{Math.round(_.values(city.main)[3])}° {Math.round(_.values(city.main)[4])}° </li>
						<li><span><WeatherWindyIcon/></span>{city.wind.speed}</li>
					</ul>
				</div>
			</div>
			)
		}
	}

	render(){
		const {city} = this.props;
		return(<div>{this.renderWeather(city)}</div>)		
	}
}


function mapToStateToProps(state){
	return{
		city: state.city
	}
}

export default connect(mapToStateToProps)(CityWeather)