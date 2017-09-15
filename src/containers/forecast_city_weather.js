import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import WeatherIcons from '../components/weather_icons';

class ForecastCityWeather extends Component{

	constructor(props){
		super(props);
		  this.state = {
		    fixedHeader: false,
		    fixedFooter: true,
		    stripedRows: false,
		    showRowHover: false,
		    selectable: false,
		    multiSelectable: false,
		    enableSelectAll: false,
		    deselectOnClickaway: false,
		    showCheckboxes: false,

		  };
	}

renderForecast(data){

	const forecast = data.forecast.simpleforecast.forecastday;
	const forecastDay = forecast.map(data => 
		<TableRow key={data.period}>
		<TableRowColumn><WeatherIcons weatherTypes={data.icon} /></TableRowColumn>
		<TableRowColumn>{data.date.weekday}</TableRowColumn>
		<TableRowColumn>{data.conditions}</TableRowColumn>
		<TableRowColumn><span>{data.low.celsius}°c</span><br/><span>{data.high.celsius}°c</span></TableRowColumn>
		</TableRow>)

	return forecastDay
	


}


	render(){
		const {weather} = this.props
		return(
		<div>
			<h4>Weather Forecast</h4>
			<Table 
				selectable={this.state.selectable}
        		multiSelectable={this.state.multiSelectable}
			>
  				<TableBody
  				displayRowCheckbox={this.state.showCheckboxes}
  				>
	  				{weather.map(this.renderForecast)}
  				</TableBody>
			</Table>
		</div>


			)
	}
}

function mapToStateToProps(state){
	return{
		weather : state.forecast
	}
}
export default connect(mapToStateToProps)(ForecastCityWeather)