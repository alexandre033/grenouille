import _ from 'lodash';	
import React, {Component} from 'react';
import WeatherRainyIcon from 'mdi-react/WeatherRainyIcon';
import WeatherSnowyRainyIcon from 'mdi-react/WeatherSnowyRainyIcon';
import WeatherWindyIcon from 'mdi-react/WeatherWindyIcon';
import WhiteBalanceSunnyIcon from 'mdi-react/WhiteBalanceSunnyIcon';
import WeatherPartlycloudyIcon from 'mdi-react/WeatherPartlycloudyIcon';
import WeatherHailIcon from 'mdi-react/WeatherHailIcon';
import WeatherSnowyIcon from 'mdi-react/WeatherSnowyIcon';
import WeatherFogIcon from 'mdi-react/WeatherFogIcon';
import WeatherSunsetIcon from 'mdi-react/WeatherSunsetIcon';
import WeatherPouringIcon from 'mdi-react/WeatherPouringIcon';
import WeatherCloudyIcon from 'mdi-react/WeatherCloudyIcon';


class WeatherIcons extends Component{

	renderIcon(data){

		const icons = {
		'chancerain' : <WeatherRainyIcon/>,
		'chancesleet' : <WeatherSnowyRainyIcon/>,
		'chancesnow' : <WeatherSnowyRainyIcon/>,
		'chancetstorms' : <WeatherWindyIcon/>,
		'clear' : <WhiteBalanceSunnyIcon/>,
		'cloudy' : <WeatherPartlycloudyIcon/>,
		'partlycloudy' : <WeatherPartlycloudyIcon/>,
		'flurries' :<WeatherHailIcon/>,
		'fog' : <WeatherFogIcon/>,
		'hazy' :<WeatherSunsetIcon/>,
		'mostlycloudy' : <WeatherCloudyIcon/>,
		'partlysunny' : <WeatherPartlycloudyIcon/>,
		'sleet' : <WeatherHailIcon/>,
		'rain' : <WeatherPouringIcon/>,
		'snow' : <WeatherSnowyIcon/>,
		'sunny' : <WhiteBalanceSunnyIcon/>,
		'tstorms' : <WeatherWindyIcon/>
	}

		if(_.keys(icons).indexOf(data) !== -1){

			return icons[data]
		}


	}
	render(){
		
	return(
			<div className="weatherSVG">
				{this.renderIcon(this.props.weatherTypes)}	
			</div>);
	}
}



export default WeatherIcons