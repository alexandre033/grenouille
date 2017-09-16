import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Chart} from '../components/charts';

class ChartsForecast extends Component{
	render(){
		return(

			<div>
				<div className="col-md-6">
					<Chart />
				</div>
				<div className="col-md-6">
					<Chart dataKey={} data={}/>
				</div>
			</div>
			)
	}
}


function mapToStateToProps(state){

	return{
		forecast : state.forecast
	}
}

export default connect (mapToStateToProps)(ChartsForecast)