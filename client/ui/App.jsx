import React,{Component} from 'react';

import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';


export default class App extends Component{
	render(){
		return(
			<div>
			<Sidebar/>
			<Header/>
			{this.props.children}
			</div>
		);
	}
}
