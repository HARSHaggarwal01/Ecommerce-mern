import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUserData:(state,action)=>{
            state.user = action.payload.user
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        setToken:(state,action)=>{
            state.token = action.payload.user
            localStorage.setItem('token',action.payload)
        },
        logout: (state) => {

            state.user="";
            state.token="";
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    }
})

export const { setUserData, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
