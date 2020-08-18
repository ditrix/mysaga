import React,{Component} from 'react';
import Quakes from './Quakes'
import axios from 'axios'
import {store} from './store'
import {actionSetQuakes} from './actions'
class App extends Component {
	componentDidMount(){
		axios('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson')
			.then((resp) => {
				store.dispatch(actionSetQuakes(resp.data.features))
				console.log(resp.data.features)
			})
			.catch(console.log('error'))
	}
 render(){
  return (
    <div className="container">
       <h1>todo saga</h1>
       	<Quakes />
    </div>
  )}
}

export default App;
