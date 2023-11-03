import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { ApiResponse, Character, IStateTree } from "../typings/store";
import characterSlice from "./slice/characterSlice";

const reducers  = combineReducers({
    characters: characterSlice
});

export default reducers