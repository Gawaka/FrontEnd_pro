import { createSlice, createAction } from '@reduxjs/toolkit';
export const fetchExcusesReq = createAction('excuses/fetchReq');
export const addExcuseReq = createAction('excuses/addReq');
export const deleteExcuseReq = createAction('excuses/deleteReq');
export const toggleExcuseReq = createAction('excuses/toggleReq');
export const clearExcusesReq = createAction('excuses/clearReq');

export const excusesSlice = createSlice({
    name: 'excuses',
    initialState: {
        list: [],
        isLoading: false,
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setExcusesSuccess: (state, action) => {
            state.list = action.payload;
        },
        addExcuseSuccess: (state, action) => {
            state.list.push(action.payload);
        },
        deleteExcuseSuccess: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload);
        },
        toggleExcuseSuccess: (state, action) => {
            const excuse = state.list.find(item => item.id === action.payload);
            if (excuse) {
                excuse.completed = !excuse.completed;
            }
        },
        clearExcusesSuccess: (state) => {
            state.list = [];
        },
        likeExcuse: (state, action) => {
            const excuse = state.list.find(item => item.id === action.payload);
            if (excuse) excuse.likes = (excuse.likes ?? 0) + 1;
        },
        disLikeExcuse: (state, action) => {
            const excuse = state.list.find(item => item.id === action.payload);
            if (excuse) excuse.likes = (excuse.likes ?? 0) - 1;
        }
    }
});

export const { 
    setLoading, setExcusesSuccess, addExcuseSuccess, 
    deleteExcuseSuccess, toggleExcuseSuccess, clearExcusesSuccess, likeExcuse, disLikeExcuse } = excusesSlice.actions;

export default excusesSlice.reducer;