import React from 'react';

import {  createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import Routes from './Routes';
import Loading from '../containers/Loading';
import mysaga from '../saga';
import { reducer } from '../slice';
import { PersistGate } from 'redux-persist/integration/react';

const sagaMiddleware = createSagaMiddleware();


const persistConfig = {
	key: 'root',
	storage,
};
  
const persistedReducer = persistReducer(persistConfig, reducer);
  
const store = createStore(persistedReducer,applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(mysaga);

console.info('This app is a demo created by @yosarouto');
console.info('Source code available at https://github.com/yosarouto/drugstore-client');
const App = () => (
	<Provider store={store}>
		<PersistGate loading={<Loading/>} persistor={persistor}>
			<Routes />
		</PersistGate>
	</Provider>
);

export default App;
