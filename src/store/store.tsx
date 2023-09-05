import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filterSlice from "../slice/filter-slice";
//import { createStore } from "redux";


const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, filterSlice);
  export const stores = configureStore({reducer: persistedReducer});
  export const persistors = persistStore(stores);

  export function store() {
    return stores;
  }
  
  export function persistor() {
    return persistors;
  }