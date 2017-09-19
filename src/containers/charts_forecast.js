import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Chart} from '../components/charts';

class ChartsForecast extends Component{

	renderChartsForecast(forecastData){

			const forecast = forecastData.forecast.simpleforecast.forecastday;
			const forecastTemp = forecast.map(data => parseInt(data.high.celsius, 10));
			const days = forecast.map(data => data.date.weekday);
			const precipitations =  forecast.map(data => data.qpf_day.mm);
			const data = []

			for (var i = 0; i<forecastTemp.length; i++){

				data.push({name: days[i], temp:forecastTemp[i], qpf:precipitations[i]})
			}
		return (
			<div>
				<div className="col-md-6 forecast">
				<h4>Forecast Temperatures (c°)</h4>
					<Chart dataKey="temp" datas={data}/>
				</div>
				<div className="col-md-6 forecast">
				<h4>Forecast Precipitations (mm)</h4>
					<Chart dataKey="qpf" datas={data}/>
				</div>
			</div>)
	}

	render(){
		const {forecast} = this.props;

		return(

			<div>
				{forecast.map(this.renderChartsForecast)}
			</div>
			)
	}
}


function mapToStateToProps(state){

	return{
		forecast : state.forecast
	}
}

export default connect(mapToStateToProps)(ChartsForecast)