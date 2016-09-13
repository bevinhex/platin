import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router';

import App from './ui/App.jsx';
import Home from './ui/Home.jsx';
import About from './ui/About.jsx';

Meteor.startup(() => {
	render((
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="about" component={About}/>
			</Route>
		</Router>
	),document.body)
});


