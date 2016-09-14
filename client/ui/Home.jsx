import React,{Component} from 'react';

import HomeCard from './HomeCard.jsx';
export default class Home extends Component{
	render(){
		return(
			<div className="ui cards">
				<HomeCard/>
				<HomeCard/>
				<HomeCard/>
			</div>
		);
	}
}
