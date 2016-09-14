import React,{Component} from 'react';

export default class Header extends Component{
	onClick(){
		console.log('Toggling header button');
	}
	render(){
		return(
			<div className="ui fixed menu">
				<div className="ui container">
					<a className="left item">
						<i className="align justify icon"></i>
					</a>
					<a className="item">
						<div className="two ui buttons">
							<button onClick={this.onClick.bind(this)} className={"ui primary button " + (this.props.opened?'active':'')}>Open</button>
							<button onClick={this.onClick.bind(this)} className={"ui primary button " + (this.props.opened?'':'active')}>Closed</button>
						</div>
					</a>
					<a className="right item">
						<i className="circle add icon"></i>
					</a>
				</div>
			</div>
		);
	}
}
