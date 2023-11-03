import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCharacters } from '../../network/api';
import { ApiResponse, Character } from '../../typings/store';

interface CharacterState {
  info: any; 
  characters: Character[];
  loading: boolean;
  error: string | null;
}

export const fetchCharacters = createAsyncThunk(
  'characters',
  async (page: number) => {
    const response: ApiResponse = await getCharacters(page);
    return response;
  }
);

const characterInitialState: CharacterState = {
  info: {},
  characters: [],
  loading: false,
  error: null,
};

const characterSlice = createSlice({
  name: 'characters',
  initialState: characterInitialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload.results;
      state.info = action.payload.info;
    },
    resetState: (state) => {
      state.characters = [];
      state.info = {};
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      const newCharacters = action.payload.results;
      const existingCharacterIds = new Set(state.characters.map((character) => character?.id));
      const uniqueNewCharacters = newCharacters.filter((character) => {
        return !existingCharacterIds.has(character.id);
      });

      state.loading = false;
      state.error = null;
      state.info = action.payload?.info;
      state.characters = [...state.characters, ...uniqueNewCharacters];
    });

    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.loading = false;
      state.characters = [];
      state.info = {};
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

// Export actions and reducer
export const { setCharacters, resetState } = characterSlice.actions;
export default characterSlice.reducer;
