import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn
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
		  this.renderForecast = this.renderForecast.bind(this)
	}

renderForecast(data, props){

	const forecast = data.forecast.simpleforecast.forecastday;
	const forecastDay = forecast.map(data => 
		<TableRow key={data.period}>
		<TableRowColumn><WeatherIcons weatherTypes={data.icon} /></TableRowColumn>
		<TableRowColumn>{data.date.weekday}</TableRowColumn>
		<TableRowColumn>{data.conditions}</TableRowColumn>
		<TableRowColumn><span>{data.low.celsius}°c</span><br/><span>{data.high.celsius}°c</span></TableRowColumn>
		</TableRow>
		);


		return (
			<Table 
			selectable={this.state.selectable}
        	multiSelectable={this.state.multiSelectable}
        	style={{backgroundColor: '#414141'}}
			>
				<TableHeader
            	displaySelectAll={this.state.showCheckboxes}
            	adjustForCheckbox={this.state.showCheckboxes}
            	enableSelectAll={this.state.enableSelectAll}
            	style={{backgroundColor: 'rgb(0,151,167)', borderBottom:'none'}}
          		>

                		<h4>Weather Forecast</h4>
          		</TableHeader>
		
  				<TableBody
  				displayRowCheckbox={this.state.showCheckboxes}
  				>
				{forecastDay}
				</TableBody>
			</Table>
			)

}


	render(){
		const {weather} = this.props
		return(<div>{weather.map(this.renderForecast)}</div>)
	}
}

function mapToStateToProps(state){
	return{
		weather : state.forecast
	}
}
export default connect(mapToStateToProps)(ForecastCityWeather)