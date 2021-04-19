import React from 'react';
import loadable from '@loadable/component';
import Loading from '../containers/Loading';

const Loadable = (path) => loadable(() => import(`../${path}`), {
	fallback: <Loading />,
});
export default Loadable;
