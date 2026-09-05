import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    user: null,
    isAuthenticated: false
};

const authSlice = createSlice({
    name: "auths",

    initialState,

    reducers: {

        setCredentials: (state, action) => {

            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },

        logout: (state) => {

            state.accessToken = null;
            state.user = null;
            state.isAuthenticated = false;
        }
    }
});

export const {
    setCredentials,
    logout
} = authSlice.actions;

export default authSlice.reducer;