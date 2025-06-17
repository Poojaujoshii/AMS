import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./AuthThunk";
const initialState = {
    user:null,
    role:null,
    loading:false,
    error:null,
    isAuthenticated:false
}

const AuthSlice = createSlice({
    name : "Auth",
     initialState : {
        user:null,
        role:null,
        loading:false,
        error:null,
        isAuthenticated:false
    },
   
    reducers: { 
        resetAuthState:()=>{
            state.loading = false;
            state.error = null;
        }
    },extraReducers: (builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{

        }).addCase(loginUser.fulfilled,(state)=>{
            
        }).addCase(loginUser.rejected,(state)=>{
            
        })
    }
})
export const {resetAuthState} = AuthSlice.actions;
export default AuthSlice.reducer;