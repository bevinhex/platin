import React,{Component} from 'react';

import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';


export default class App extends Component{
	render(){
		return(
			<div>
				<Sidebar/>
				<Header opened="true"/>
				<div style={{paddingTop:'64px'}}>
					{this.props.children}
				</div>
			</div>
		);
	}
}
