import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
      query: "",
      category: "",
      start_range: 0,
      end_range: 0,
      brand: "",
      isFiltered: false
    },
    reducers: {
      setQuery: (state, action) => {
        state.query = action.payload;
      },
      setCategory: (state, action) => {
        state.category = action.payload;
      },
      setStartRange: (state, action) => {
        state.start_range = action.payload;
      },
      setEndRange: (state, action) => {
        state.end_range = action.payload;
      },
      setBrand: (state, action) => {
        state.brand = action.payload;
      },
      setFilterStatus: (state, action) => {
        state.isFiltered = action.payload;
      },
    }
  });
  
  export const { 
    setQuery,
    setCategory,
    setStartRange,
    setEndRange,
    setBrand,
    setFilterStatus
   } = filterSlice.actions;

  export const selectQuery = (state: { query: string; }) => state.query;
  export const selectCategory = (state: { category: string; }) => state.category;
  export const selectStartRange = (state: { start_range: string; }) => state.start_range;
  export const selectEndRange = (state: { end_range: string; }) => state.end_range;
  export const selectBrand = (state: { brand: string; }) => state.brand;
  export const selectFilterStatus = (state: { isFiltered: boolean; }) => state.isFiltered;
  
  //export const filter = (state: FilterState) => state.value
  
  export default filterSlice.reducer;