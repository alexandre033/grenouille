import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Chart} from '../components/charts';

class ChartsHourly extends Component{

	renderHourly(data){

		if(Object.keys(data).length > 0 ){

			const hourlyForecast = data.hourly_forecast.map(hourly => hourly)
			const temps = hourlyForecast.map(temp => parseInt(temp.temp.metric))
			const hours = hourlyForecast.map(time => time.FCTTIME.hour)
			const precipitation = hourlyForecast.map(prec => parseInt(prec.qpf.metric))
 			const dataTempHour = []

			for(var i = 0; i<temps.length;i++){
				dataTempHour.push({name:hours[i], temp: temps[i], qpf:precipitation[i]})
			}
					

			return(
					<div>
						<div className='col-md-6'>
							<Chart datas={dataTempHour} dataKey="temp"/>
						</div>
						<div className='col-md-6'>
							<Chart datas={dataTempHour} dataKey="qpf"/>
						</div>		
					</div>

	
				)
		}
	}

	render(){
		const {hourly} = this.props;

		return(
			<div>
				<h4>Temperatures & precipitations per hour</h4>
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

export default connect(mapToStateToProps)(ChartsHourly)