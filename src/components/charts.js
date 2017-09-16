import React from 'react';
import { LineChart, Line, XAxis, YAxis, Bar, CartesianGrid, Area, AreaChart, Tooltip,
  ResponsiveContainer , ComposedChart, Legend} from 'recharts';


export const Chart = (props) =>{

	return(
		<ResponsiveContainer width="100%" height={300}>
			<ComposedChart data={props.datas}>
				<XAxis dataKey="name"/>
				<YAxis/>
				<Tooltip/>
				<Legend />
				<Line type="monotone" dataKey={props.dataKey} stroke="#8884d8" />
			</ComposedChart>
		</ResponsiveContainer>

		)
		
}