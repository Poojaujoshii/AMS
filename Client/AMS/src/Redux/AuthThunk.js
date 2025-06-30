// src/store/features/authThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:8000/api/auth";   // <-- change here if the server moves

axios.defaults.withCredentials = true;          // send & receive cookies

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password, role }, { rejectWithValue }) => {
    try {
      await axios.post(`${API}/${role}/login`, { email, password });
      return { role };                          // reducer can store the role
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Login error"
      );
    }
  }
);

export const checkAuthStatus = createAsyncThunk(
  "auth/checkAuthStatus",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API}/me`);
      return { user: data.user, role: data.role };
    } catch {
      return rejectWithValue("Not authenticated");
    }
  }
);
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axios.get("http://localhost:8000/api/auth/logout", {
        withCredentials: true,
      });
    } catch (err) {
      return rejectWithValue("Logout failed");
    }
  }
);



