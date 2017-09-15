import React, {Component} from 'react';
import {connect} from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Bar, CartesianGrid, Area, AreaChart, Tooltip,
  ResponsiveContainer , ComposedChart, Legend} from 'recharts';
import _ from 'lodash'

class HourlyCityWeather extends Component{

	renderHourly(data){

		if(Object.keys(data).length > 0 ){

			const hourlyForecast = data.hourly_forecast.map(hourly => hourly)
			const temps = hourlyForecast.map(temp => parseInt(temp.temp.metric))
			const hours = hourlyForecast.map(time => time.FCTTIME.hour)
			const humidity = hourlyForecast.map(hum => parseInt(hum.humidity))
 			const dataTempHour = []

			for(var i = 0; i<temps.length;i++){
				dataTempHour.push({name:hours[i], temp: temps[i], hum:humidity[i]})
			}
					

			return(
					<div>
						<div className="col-md-6">
							<ResponsiveContainer width="100%" height={300}>
								<ComposedChart data={dataTempHour}>
									<XAxis dataKey="name"/>
				       				<YAxis/>
				       				<Tooltip/>
				       				<Legend />
				 					 	<Line type="monotone" dataKey="temp" stroke="#8884d8" />
								</ComposedChart>
							</ResponsiveContainer>
						</div>
						<div className="col-md-6">
							<ResponsiveContainer width="100%" height={300}>
								<ComposedChart data={dataTempHour}>
									<XAxis dataKey="name"/>
				       				<YAxis/>
				       				<Tooltip/>
				       				<Legend />
				 					 	<Area type="monotone" dataKey="hum" fill="#8884d8" stroke="#8884d8" />
								</ComposedChart>
							</ResponsiveContainer>
						</div>
					</div>

	
				)
		}
	}

	render(){
		const {hourly} = this.props;

		return(
			<div>
				<h4>Temperatures per hour</h4>
				{hourly.map(this.renderHourly)}
			</div>

			)
	}
}

function mapToStateToProps(state){
	return{
		hourly : state.hourly
	}
}

export default connect(mapToStateToProps)(HourlyCityWeather)