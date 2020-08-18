const initialstate = {
	quakes:[]
}

export const quakesReducer = (state =  initialstate, action) => {
	switch(action.type){
		case 'SET_QUAKES':
			return {...state, quakes: action.payload}
		default:
			return state
	}
}