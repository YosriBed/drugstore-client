import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../../slice';


const index = ({match: {params: {id}}}) => {
	const dispatch = useDispatch();
	const category = useSelector(state => state.category);

	useEffect(()=>{
		dispatch(actions.getCategory({id}));
	},[dispatch]);

	return (
		<section className="text-gray-400 bg-gray-900 body-font">
			<div className="container px-5 pt-24 mx-auto">
				{category && (
					<div className="flex flex-col text-center w-full mb-20">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{category.name}</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">{category.description}</p>
					</div>
				)}
			</div>
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap -m-4">
					{category && category.drugs.map(({id, name, picture, price, ingredients}) => (
						<div key={`${id}${name}`} className="lg:w-1/3 md:w-1/2 p-3 w-full">
							<Link to={`/product/${id}`} >
								<div className="block relative h-48 rounded overflow-hidden">
									<img alt="ecommerce" className="object-cover object-center w-full h-full block" src={picture}/>
								</div>
								<div className="mt-4">
									<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
										{ingredients.map(({name})=>(name))
											.reduce((prev, curr) => [prev, ', ', curr])}
									</h3>
									<h2 className="text-white title-font text-lg font-medium">{name}</h2>
									<p className="mt-1">${price}</p>
								</div>
							</Link>
						</div>
					))}
				</div>

				
			</div>
		</section>
	);
};

export default index;