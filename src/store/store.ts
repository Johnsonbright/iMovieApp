import thunk from "redux-thunk";
import { CACHE_KEY,CACHE_VERSION } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistConfig,persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, } from "redux-persist";
import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";



const persistConfig = {
  key: CACHE_KEY,
  timeout: 10000,
  storage: AsyncStorage,
  version: CACHE_VERSION,
};


const store = configureStore( {reducer: reducers});

export { store };
