import React,{Component} from 'react';

export default class Header extends Component{
	onToggle(){
	}
	render(){
		return(
			<div className="ui fixed inverted menu">
				<div className="ui container">
					<a className="left item">
						<i className="align justify icon"></i>
					</a>
					<a className="item">
						<div className="switch">
							<input type="radio" className="switch-input" onChange={this.onToggle} name="view" value="Open" id="Open" checked/>
							<label htmlFor="Open" className="switch-label switch-label-off">Open</label>
							<input type="radio" className="switch-input" onChange={this.onToggle} name="view" value="Closed" id="Closed"/>
							<label htmlFor="Closed" className="switch-label switch-label-on">Closed</label>
						    <span className="switch-selection"></span>
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
