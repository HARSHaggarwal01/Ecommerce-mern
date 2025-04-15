import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/AuthSlice";
import categorySlice from "../features/CategorySlice"
export const store = configureStore({

    reducer:{
        auth:authSlice,
        category:categorySlice
    }
})