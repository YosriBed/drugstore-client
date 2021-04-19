/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
	name: 'rootReducer',
	initialState: {
		loading: false,
		error: false,
		products: [],
		product: null,
		categories: [],
		category: null,
		cart: []
	},
	reducers: {
		
		error(state, action) {
			state.error = action.payload.error;
			state.loading = false;
		},
		getProducts() {},
		setProducts(state, action) {
			state.products = action.payload.data;
		},
		getProduct() {},
		setProduct(state, action) {
			state.product = action.payload.data;
		},
		getCategories() {},
		setCategories(state, action) {
			state.categories = action.payload.data;
		},
		getCategory() {},
		setCategory(state, action) {
			state.category = action.payload.data;
		},
		resetCart(state){
			state.cart = [];
		},
		addToCart(state, action){
			state.cart.push(action.payload);
		},
		removeFromCart(state, action){
			state.cart = state.cart.filter(product => product.id !== action.payload.id);
		},
		confirmPurchase(){}
	},
});

export const { name, actions, reducer } = appSlice;
