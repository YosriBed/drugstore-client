import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Details from './Details';
import List from './List';

const index = () => {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route exact path={path} component={List}/>
			<Route exact path={`${path}/:id`} component={Details}/>
		</Switch>
	);
};

export default index;