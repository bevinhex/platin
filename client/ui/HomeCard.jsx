import React,{Component} from 'react';
import Mock from 'mockjs';

export default class HomeCard extends Component{
	render(){
		return(
			<div className="ui fluid card">
				<div className="content">
					<div className="right floated meta"><i className="star icon"></i>173</div>
					<div className="header">{Mock.Random.name()}</div>
				</div>
				<div className="extra description">
				{Mock.Random.sentence(3,5)}
				</div>
				<div className="image">
					<img src={Mock.Random.dataImage('88x31')}/>
					<div className="time">{Mock.Random.time('HH:mm:ss')}</div>
				</div>
				<div className="extra content ui three column grid">
					<div className="column">
					<span className="left floated">
						<i className="user icon"></i>
						{Mock.Random.integer(0,1000)} Friends
					</span>
					</div>
					<div className="column center aligned">
					<div className="ui tiny primary button">
						<i className="anchor icon"></i>
						ACCEPT
					</div>
					</div>
					<div className="column">
					<span className="right floated">
						<i className="share icon"></i>
						Share
					</span>
					</div>
				</div>
			</div>
		);
	}
}
