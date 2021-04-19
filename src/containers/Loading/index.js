import React from 'react';
import ContentLoader from 'react-content-loader';

const index = () => (
	<ContentLoader 
		speed={2}
		viewBox="0 0 800 400"
		backgroundColor="#111827"
		foregroundColor="#6366F1"
	>
		<rect x="50" y="20" rx="0" ry="0" width="150" height="150" /> 
		<rect x="50" y="180" rx="0" ry="0" width="150" height="10" /> 
		<rect x="50" y="200" rx="0" ry="0" width="100" height="10" />

		<rect x="300" y="20" rx="0" ry="0" width="150" height="150" />
		<rect x="300" y="180" rx="0" ry="0" width="150" height="10" /> 
		<rect x="300" y="200" rx="0" ry="0" width="100" height="10" />

		<rect x="550" y="20" rx="0" ry="0" width="150" height="150" />
		<rect x="550" y="180" rx="0" ry="0" width="150" height="10" /> 
		<rect x="550" y="200" rx="0" ry="0" width="100" height="10" />
	</ContentLoader>
);

export default index;
