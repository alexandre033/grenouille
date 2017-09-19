import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Chart} from '../components/charts';

class ChartsForecast extends Component{

	renderChartsForecast(forecastData){

			const forecast = forecastData.forecast.simpleforecast.forecastday;
			const forecastTemp = forecast.map(data => parseInt(data.high.celsius));
			const days = forecast.map(data => data.date.weekday);
			const precipitations =  forecast.map(data => data.qpf_day.mm);
			const data = []

			for (var i = 0; i<forecastTemp.length; i++){

				data.push({name: days[i], temp:forecastTemp[i], qpf:precipitations[i]})
			}
			console.log(data)
		return (
			<div>
				<div className="col-md-6">
					<Chart dataKey="temp" datas={data}/>
				</div>
				<div className="col-md-6">
					<Chart dataKey="qpf" datas={data}/>
				</div>
			</div>)
	}

	render(){
		const {forecast} = this.props;

		return(

			<div>
			<h4>Forecast temperatures & precipitations</h4>
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