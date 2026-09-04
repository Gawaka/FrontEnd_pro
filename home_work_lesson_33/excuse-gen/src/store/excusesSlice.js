import { createSlice } from '@reduxjs/toolkit';
import mockExcuses from '../data/mockExcuses';

const loadInitialState = ()=> {
    const savedExcuses = localStorage.getItem('myExcuses');
    if (savedExcuses && savedExcuses !== undefined) {
        return JSON.parse(savedExcuses);
    }
    return mockExcuses;
};

const initialState = {
    list: loadInitialState(),
};

export const excusesSlice = createSlice({
    name: 'excuses',
    initialState,
    reducers: {
        addExcuse: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem('myExcuses', JSON.stringify(state.list));
        },
        deleteExcuse: (state, action) => {
            state.list = state.list.filter(excuse => excuse.id !== action.payload);
            localStorage.setItem('myExcuses', JSON.stringify(state.list));
        },
        likeExcuse: (state, action) => {
            const excuse = state.list.find(item => item.id === action.payload);
            if (excuse) {
                excuse.likes = (excuse.likes ?? 0) + 1;
                localStorage.setItem('myExcuses', JSON.stringify(state.list));
            }
        },
        disLikeExcuse: (state, action) => {
            const excuse = state.list.find(item => item.id === action.payload);
            if (excuse) {
                excuse.likes = (excuse.likes ?? 0) - 1;
                localStorage.setItem('myExcuses', JSON.stringify(state.list));
            }
        }
    }
});

export const { addExcuse, deleteExcuse, likeExcuse, disLikeExcuse } = excusesSlice.actions;
export default excusesSlice.reducer;