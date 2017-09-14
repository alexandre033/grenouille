import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions';
import {fetchForecast} from '../actions';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';


class SearchBar extends Component{

	constructor(props){
		super(props);
		this.state = {term:[]}
		this.onInputValue = this.onInputValue.bind(this)
		this.onClick = this.onClick.bind(this)
	}

	onInputValue(e){
		const term = e.target.value
		this.setState({term:term})
	}

	onClick(){
		this.props.fetchWeather(this.state.term)
		this.props.fetchForecast(this.state.term)
	}

	handleUpdateInput = (value) => {
    this.setState({
      term: [value],
    });
  };

	render(){

		return(
				<div className="input-group">
					<AutoComplete
			          	hintText="Type anything"
			          	dataSource={this.state.term}
			          	onUpdateInput={this.handleUpdateInput}
			          	floatingLabelText="Check the weather for your city"
			          	fullWidth={true}
        			/>
					<span className="input-group-btn">
						<RaisedButton onClick={this.onClick} label="Show weather" primary={true}/>
					</span>
				</div>

			);
	}
}

export default connect(null, {fetchWeather, fetchForecast})(SearchBar);