import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCharacters } from "../../network/api";
import { ApiResponse, Character } from "../../typings/store";



export const fetchCharacters = createAsyncThunk(
  "characters",
  async (page:number) => {
    const response: ApiResponse = await getCharacters(page);
    // console.log("🚀 ~ file: characterSlice.ts:11 ~ res:", response);
    return response
   
  }
);




// Create a slice
const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    info: {},
    characters:[] ,
    loading: false,
    error: null as string | null,

  },
  reducers: {

    setCharacters:(state, action) =>{
      state.characters = action.payload.results,
      state.info = action.payload.info

    },

    

    searchCharacters: (state, action) => {      
        const searchQuery = action.payload.toLowerCase();

        const currentState = state.characters


          if (searchQuery) {

            const newData = currentState.filter(char => {
              const itemData = char?.name?.toLowerCase()      
              return itemData.indexOf(searchQuery) > -1;
            });
            console.log("🚀 ~ file: characterSlice.ts:50 ~ newData ~ newData:", newData);
      
            // setSearchResult(newData);
            // setSearchText(text);
            
            state.characters = []
            state.characters = newData
          } else {
            // setSearchResult(rates);
            // setRates(rates);
          }
        

      
        


      },



      resetState: (state, action) => {
        state.characters =[],
        state.info = {}
      }
    
  },



  extraReducers(builder) {
    builder.addCase(fetchCharacters.pending, (state, action) => {
      state.loading = true;
    });


    builder.addCase(fetchCharacters.fulfilled, (state , action) => {

      const newCharacters = action.payload.results;
      const existingCharacterIds = new Set(state.characters.map((character) => character.id));

      const uniqueNewCharacters = newCharacters.filter((character) => {
        return !existingCharacterIds.has(character.id);
      });

      state.loading = false,
      state.error = null,
      state.info = action.payload?.info,
      state.characters = [...state.characters, ...uniqueNewCharacters];

      
    })


    builder.addCase(fetchCharacters.rejected, (state, action)=> {
      state.loading = false,
      state.characters=[],
      state.info={},
      state.error = action.error.message || "Something went wrong";
    })
  },



});

// Export actions and reducer
export const { setCharacters, searchCharacters ,resetState} = characterSlice.actions;
export default characterSlice.reducer;
