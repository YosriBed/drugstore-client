import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { actions } from '../../../slice';

const index = () => {
	const dispatch = useDispatch();
	const categories = useSelector(state => state.categories);
	useEffect(()=>{
		dispatch(actions.getCategories());
	},[dispatch]);
	return (
		<section className="text-gray-400 bg-gray-900 body-font py-24">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap -mx-4 -mb-10 text-center">
					{categories.map(({id, name, description, picture, drugs})=>(
						<div key={`${id}${name}`} className="sm:w-1/2 mb-10 px-4">
							<div className="rounded-lg h-64 overflow-hidden">
								<img alt="content" className="object-cover object-center h-full w-full" src={picture}/>
							</div>
							<h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">{name}</h2>
							<p className="leading-relaxed text-base">{description}</p>
                            
							<button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded"><Link to={`/category/${id}`} >{drugs.length} available</Link></button>
						</div>
					))}
					
				</div>
			</div>
		</section>
	);
};

export default index;