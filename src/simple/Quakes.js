import React,{Component} from 'react'
import {connect} from 'react-redux'



class Quakes extends Component {
	render(){
		return(
			<>
				{(this.props.quakes === [])?<span>loading...</span>:
					<ul>
						{this.props.quakes.map((item, index) =>
							<li key={index}>{item.properties.title}</li>
						)}
					</ul>
				}
			</>
		)
	}
}

const mapStateToProps = store => {
	return {quakes: store.quakes}
} 
export default connect(mapStateToProps)(Quakes)