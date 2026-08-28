import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import excusesReducer from './excusesSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        excuses: excusesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);