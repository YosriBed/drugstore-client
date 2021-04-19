import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {actions} from '../../slice';

const index = () => {

	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);

	const removeFromCart = (e,id) => {
		e.preventDefault();
		dispatch(actions.removeFromCart({id}));
	};
	
	return (
		<section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="-my-8 divide-y-2 divide-gray-800">
					{cart.map((product) => (
						<div key={`${product.id}${product.name}`}className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
							<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
								<span className="font-semibold title-font text-white">${product.price}</span>
							</div>
							<div className="md:flex-grow">
								<h2 className="text-2xl font-medium text-white title-font mb-2">{product.name}</h2>
								<p className="leading-relaxed">{product.description}</p>
								<button onClick={(e) => {removeFromCart(e, product.id);}} className="text-indigo-400 inline-flex items-center mt-4">Remove from cart
									<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
										<path d="M5 12h14"></path>
										<path d="M12 5l7 7-7 7"></path>
									</svg>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="container px-5  mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
							${cart.map(({price})=> price).reduce((prev,curr)=> prev+curr, 0)}
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Confirm your order by filling out this form
					</p>
				</div>
				<div className="lg:w-1/2 md:w-2/3 mx-auto">
					<div className="flex flex-wrap -m-2">
						<div className="p-2 w-1/2">
							<div className="relative">
								<label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
								<input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="relative">
								<label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
								<input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative">
								<label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
								<textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
							</div>
						</div>
						<div className="p-2 w-full">
							<button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to="/">Confirm</Link></button>
						</div>
						
					</div>
				</div>
			</div>
		</section>
	);
};

export default index;