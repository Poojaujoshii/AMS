import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
axios.defaults.withCredentials = true;
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    ({email,password,role},{rejectWithValue})=>{
        try{
              const response = axios.post(`http://localhost:8000/api/auth/${role}/login`)

        }
        catch(error){
          
        }

    }
)
    