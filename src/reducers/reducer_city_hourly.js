import {FETCH_HOURLY} from '../actions';


export default function(state=[], action){

	switch(action.type){
		case FETCH_HOURLY :
			return [action.payload.data];
		default:
			return state;
	}
}