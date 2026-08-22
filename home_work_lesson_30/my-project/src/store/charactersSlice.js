import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    characters: [],
    error: false,
    isLoading: true
}

export const getCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async ()=> {
        const response = await fetch('https://swapi.dev/api/people')
            if (!response.ok) {
                throw new Error(`Помилка сервера: ${response.status}`);
            }
            const data = await response.json();

            return data.results;
    });

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        resetCharacters: (state) => {
            state.characters = [];
        }
    },
    extraReducers: (builder)=> {
        builder
            .addCase(getCharacters.pending, (state)=> {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getCharacters.fulfilled, (state , action)=> {
                state.isLoading = false;
                state.characters = action.payload;
            })
            .addCase(getCharacters.rejected, (state)=> {
                state.error = true;
                state.isLoading = false;
            })
    }
});

export const { resetCharacters } = charactersSlice.actions;
export default charactersSlice.reducer