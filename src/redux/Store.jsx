import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/AuthSlice.jsx";

export const Store = configureStore({
    reducer: {
        auth: authReducer
    }
});