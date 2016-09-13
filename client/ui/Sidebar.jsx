import React,{Component} from 'react';

export default class Sidebar extends Component{
	constructor(props){
		super(props);

		this.hammer = new Hammer(document.body);
		this.hammer.on("panstart",Hammer.bindFn(this.panStart,this));
		this.hammer.on("panmove",Hammer.bindFn(this.panMove,this));
		this.hammer.on("panend",Hammer.bindFn(this.panEnd,this));
		
		this.state = {
			pos:0
		}
	}
	componentDidMount(){
		this.setState({pos:-$(this.refs.panel).width()});
	}
	panStart(e){
		this.lastX = e.center.x;
	}
	panMove(e){
		let delta = e.center.x - this.lastX;
		this.lastX = e.center.x;

		this.setState({pos:this.state.pos+delta});
		if(this.state.pos < -$(this.refs.panel).width())
			this.setState({pos:-$(this.refs.panel).width()});
		if(this.state.pos>0)
			this.setState({pos:0});
	}
	panEnd(e){
		let percent = 100*(1-(-this.state.pos/$(this.refs.panel).width()));
		if(percent<50)
		{
			$(this.refs.panel).animate({transform:"translateX(-"+$(this.refs.panel).width()+")"},200);
		}
		else{
			$(this.refs.panel).animate({transform:"translateX(0)"},200);
		}
	}
	render(){
		let style={
			visibility:"visible",
			zIndex:102
		};
		$(this.refs.panel).animate({transform:"translateX("+this.state.pos+")"},0);
		return(
			<div id="main_sidebar" ref="panel" style={style} className="ui sidebar fixed inverted vertical large menu">
				<div className="item">
					<img className="ui centered small image" src="img/favicon.png"/>
					<div className="ui" style={{textAlign:'center'}} >BetRate:116<i className="star icon"></i></div>
					<button className="ui primary centered fluid button">
						<i className="add circle icon"></i>
							CREATE CHALLENGE
					</button>
				</div>
				<a className="item" href="/">
					Activity Feed
				</a>
				<a className="item" href="about">
					My Challenges
				</a>
				<a className="item" href="about">
					Discussions
				</a>
				<a className="item"	href="about">
					My Stats
				</a>
				<a className="item"	href="about">
					My Connections
				</a>
				<a className="item"	href="about">
					Best Bets
				</a>
			</div>
		);
	}
}
