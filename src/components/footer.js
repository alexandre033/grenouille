import React from 'react';
import HeartIcon from 'mdi-react/HeartIcon';

export const Footer = () =>{

	const styleIcon = {
		
		width:'16px',
		height: '16px',
	}

	return(

		<div id="footer">
			<p>Made with <HeartIcon style={styleIcon}/> thanks to React & Redux</p>
		</div>

		)
}