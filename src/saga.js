import {
	call, put, takeLatest,   all
} from 'redux-saga/effects';

import {actions} from './slice';

const api = (url, method,body) => {
	const baseApiUrl = process.env.REACT_APP_API_SERVER || 'http://localhost:8080';
	return fetch(`${baseApiUrl}${url}`,
		{
			method,
			body,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
		.then(data => (data))
		.catch(err => (err));
};
function* fetchProducts() {
	try {
		const products = yield call(api, '/api/drugs');
		yield put(actions.setProducts(products));
	} catch (e) {
		yield put(actions.error(e));
	}
}
function* fetchProduct({payload: {id}}) {
	try {
		const products = yield call(api, `/api/drugs/${id}`);
		yield put(actions.setProduct(products));
	} catch (e) {
		yield put(actions.error(e));
	}
}
function* fetchCategories() {
	try {
		const categories = yield call(api, '/api/categories');
		yield put(actions.setCategories(categories));
	} catch (e) {
		yield put(actions.error(e));
	}
}
function* fetchCategory({payload: {id}}) {
	try {
		const category = yield call(api, `/api/categories/${id}`);
		yield put(actions.setCategory(category));
	} catch (e) {
		yield put(actions.error(e));
	}
}
function* saga() {
	yield all([
		takeLatest(actions.getProducts.type, fetchProducts),
		takeLatest(actions.getProduct.type, fetchProduct),
		takeLatest(actions.getCategories.type, fetchCategories),
		takeLatest(actions.getCategory.type, fetchCategory)
	]);
}
  
export default saga;
  