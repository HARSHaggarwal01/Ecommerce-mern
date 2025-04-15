import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { BASE_URL,API_URL } from "../constants/contant";

const initialState = {
    category: [],
    status: 'idle',
}

export const fetchCategoriesAsync = createAsyncThunk(
    'categories/fetchcategories',
    async () => {
      const response = await axios.get(`${BASE_URL}${API_URL.category}`);
      return response.data.data;
    },
  );

export const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(fetchCategoriesAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.category  = action.payload;
          });
      },
})

export default categorySlice.reducer;
