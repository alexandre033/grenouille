/* eslint-disable no-undef */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions';
import {fetchForecast} from '../actions';
import {fetchHourly} from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import CompassOutlineIcon from 'mdi-react/CompassOutlineIcon'

class SearchBar extends Component{

	constructor(props){
		super(props);
		this.state = {term:[], lat : "", long:"", value:""}
		this.onClick = this.onClick.bind(this)
		this.handleUpdateInput = this.handleUpdateInput.bind(this)
	}

	onClick(e){
		let windowheight = window.innerHeight
		if(!this.state.lat || !this.state.long){
				e.preventDefault()	
				alert('A value is needed')	
		}else{		
		this.props.fetchWeather(this.state.lat, this.state.long)
		this.props.fetchForecast(this.state.lat, this.state.long)
		this.props.fetchHourly(this.state.lat, this.state.long)
			setTimeout(function () {
	            window.scrollTo({
				  top: windowheight, 
				  left: 0, 
				  behavior: 'smooth' 
				});
	        },400);
	        let y = window.scrollY
	        console.log(y)
		}
		
	}

	handleUpdateInput(e) {
		let options = {
			  types: ['(cities)'],
			  componentRestrictions: {country: 'fr'}
			};
		const autocomplete = new google.maps.places.Autocomplete((this.refs.AutoCompletePlaces), options);
		autocomplete.addListener('place_changed', function(){
			let place = autocomplete.getPlace();
			this.setState({
	      		lat: [place.geometry.location.lat()],
	      		long: [place.geometry.location.lng()]
	    	});
			
		}.bind(this));
	};


	render(){

		return(
			
				<div className="input-group group">
        			<input type="text" 
        			ref="AutoCompletePlaces"
        			onChange={this.handleUpdateInput}	
        			required

        			 />
					<span className="highlight"></span>
					<span className="bar"></span>
					<label>Find your city weather</label>
					<span className="input-group-btn">
						<RaisedButton backgroundColor="white" onClick={this.onClick} primary={true} icon={<CompassOutlineIcon/>}/>
					</span>
				</div>

			);
	}
}

export default connect(null, {fetchWeather, fetchForecast, fetchHourly})(SearchBar);