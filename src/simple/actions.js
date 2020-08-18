export const actionSetQuakes = (data = null) => {
	return {
		type: 'SET_QUAKES',
		payload: data,
	}
}