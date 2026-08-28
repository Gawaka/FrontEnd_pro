import { takeEvery, put, call, delay } from 'redux-saga/effects';
import mockExcuses from '../data/mockExcuses';
import { 
    fetchExcusesReq, addExcuseReq, deleteExcuseReq, toggleExcuseReq, clearExcusesReq,
    setLoading, setExcusesSuccess, addExcuseSuccess, deleteExcuseSuccess, toggleExcuseSuccess, clearExcusesSuccess
} from './excusesSlice';

const api = {
    fetchData: async () => {
        const data = localStorage.getItem('myExcuses');
        return data && data !== "undefined" ? JSON.parse(data) : mockExcuses.map(e => ({...e, completed: false}));
    },
    saveData: async (data) => localStorage.setItem('myExcuses', JSON.stringify(data))
};

function* workFetchExcuses() {
    yield put(setLoading(true));
    yield delay(300);
    const data = yield call(api.fetchData);
    yield put(setExcusesSuccess(data));
    yield put(setLoading(false));
}

function* workAddExcuse(action) {
    yield put(addExcuseSuccess(action.payload));
    const currentData = yield call(api.fetchData);
    yield call(api.saveData, [...currentData, action.payload]);
}

function* workDeleteExcuse(action) {
    yield put(deleteExcuseSuccess(action.payload));
    const currentData = yield call(api.fetchData);
    yield call(api.saveData, currentData.filter(e => e.id !== action.payload));
}

function* workToggleExcuse(action) {
    yield put(toggleExcuseSuccess(action.payload));
    const currentData = yield call(api.fetchData);
    const updatedData = currentData.map(e => e.id === action.payload ? { ...e, completed: !e.completed } : e);
    yield call(api.saveData, updatedData);
}

function* workClearExcuses() {
    yield put(clearExcusesSuccess());
    yield call(api.saveData, []);
}

export default function* rootSaga() {
    yield takeEvery(fetchExcusesReq.type, workFetchExcuses);
    yield takeEvery(addExcuseReq.type, workAddExcuse);
    yield takeEvery(deleteExcuseReq.type, workDeleteExcuse);
    yield takeEvery(toggleExcuseReq.type, workToggleExcuse);
    yield takeEvery(clearExcusesReq.type, workClearExcuses);
}