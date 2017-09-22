import React from 'react';
import {XAxis, YAxis, Area,Tooltip,
  ResponsiveContainer , ComposedChart, Legend} from 'recharts';


export const Chart = (props) =>{

	return(
		<ResponsiveContainer width="100%" height={250}>
			<ComposedChart data={props.datas}>
				<XAxis dataKey="name"/>
				<YAxis/>
				<Tooltip/>
				<Legend />
				<Area type="monotone" dataKey={props.dataKey} stroke="#0097A7" fill='#B2EBF2'/>
			</ComposedChart>
		</ResponsiveContainer>

		)
		
}