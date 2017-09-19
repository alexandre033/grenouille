import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Chart} from '../components/charts';

class ChartsHourly extends Component{

	renderHourly(data){
		if(Object.keys(data).length > 0 ){

			const hourlyForecast = data.hourly_forecast.map(hourly => hourly)
			const temps = hourlyForecast.map(temp => parseInt(temp.temp.metric, 10))
			const hours = hourlyForecast.map(time => time.FCTTIME.hour)
			const precipitation = hourlyForecast.map(prec => parseInt(prec.qpf.metric, 10))
 			const dataTempHour = []

			for(var i = 0; i<temps.length;i++){
				dataTempHour.push({name:hours[i], temp: temps[i], qpf:precipitation[i]})
			}
					

			return(
					<div>
						<div className='col-md-6 hourly'>
						<h4>Hourly Temperatures (c°)</h4>
							<Chart datas={dataTempHour} dataKey="temp"/>
						</div>
						<div className='col-md-6 hourly'>
						<h4>Hourly Precipitations (mm)</h4>
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