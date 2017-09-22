import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './components/app';
import './index.css';

const store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
	<Provider store={store(reducers)}>
		<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
			<App />
		</MuiThemeProvider>
	</Provider>


	, document.getElementById('root'));
