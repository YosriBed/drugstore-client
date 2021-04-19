import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../slice';


const index = ({match: {params: {id}}}) => {
	const dispatch = useDispatch();
	const {product,cart} = useSelector(state => state);
	const alreadyAdded = cart.findIndex(item => item.id.toString() === id.toString());
	useEffect(()=>{
		dispatch(actions.getProduct({id}));
	},[dispatch]);

	const addToCart = (e) => {
		e.preventDefault();
		dispatch(actions.addToCart(product));
	};
	return (
		<section className="text-gray-600 body-font overflow-hidden bg-gray-900">
			<div className="container px-5 py-24 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap ">
					{product && (
						<>
							<div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 ">
								<h2 className="text-sm title-font text-gray-400 tracking-widest">{product.category.name}</h2>
								<h1 className="text-gray-400 text-3xl title-font font-medium mb-4">{product.name}</h1>
								<div className="flex mb-4">
									<span className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</span>
									<span className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</span>
								</div>
								<p className="leading-relaxed mb-4">{product.description}</p>
								{product.ingredients.map(({id, name,mass,unit}) => (
									<div key={`${id}${name}`} className="flex border-t border-gray-200 py-2">
										<span className="text-gray-400">{name}</span>
										<span className="ml-auto text-gray-100">{mass} {unit}</span>
									</div>
								))}
								<div className="flex">
									<span className="title-font font-medium text-2xl text-gray-200">${product.price}</span>
									<button type="button" disabled={alreadyAdded !== -1} onClick={addToCart} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
										{alreadyAdded !== -1 ?  'Already Added': 'Add to cart'}
									</button>
									<button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
										<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
											<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
										</svg>
									</button>
								</div>
							</div>
							<img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.picture}/>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default index;