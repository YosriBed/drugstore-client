import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
	<div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" style={{
		minHeight: "100vh",
		backgroundImage: 'url(\'https://source.unsplash.com/random\')' }}>
		<Navbar/>

		<main className="bg-cover">{children}</main>
    
		<Footer/>
	</div>
);
Layout.propTypes = {
	children: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default Layout;
