import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import loadable from '@loadable/component';
import Layout from './Layout';
import Loading from '../containers/Loading';

const Product = loadable(() => import('../containers/Product'), { fallback: <Loading /> });
const Category = loadable(() => import('../containers/Category'), { fallback: <Loading /> });
const Cart = loadable(() => import('../containers/Cart'), { fallback: <Loading /> });


const Routes = () => (
	<Router history={history}>
		<Layout>
			<Switch>
				<Route exact path="/" component={Product} />
				<Route path="/product" component={Product} />
				<Route path="/category" component={Category} />
				<Route path="/cart" component={Cart} />
			</Switch>
		</Layout>
	</Router>
);

export default Routes;
