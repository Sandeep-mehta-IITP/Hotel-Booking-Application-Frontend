import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../API/axiosInstance";
import { toast } from "react-hot-toast";

const initialState = {
  userData: null,
  loading: false,
  isAuthenticated: false,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Override default JSON header
        },
      });
      toast.success("Signup successful! 🎉");
      return response.data?.data?.user;
    } catch (error) {
      const message = error.userMessage || "Signup failed! ❌";
      console.error("Signup failed:", message);
      toast.error(message || "Signup failed! ❌");
      return rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Login successful! 🎉");
      // console.log("login data", response.data);
      // console.log("login", response.data.data);
      // console.log("login user", response.data.data.user);

      return response.data?.data?.user;
    } catch (error) {
      console.log("Login failed:", error.userMessage);
      toast.error(error.userMessage || "Login failed! ❌");
      return rejectWithValue(error.userMessage);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await axiosInstance.post("/users/logout", {});
      toast.success("Logged out successfully ... 🎊");
    } catch (error) {
      console.log("LOGOUT FAILED:", error.userMessage);
      toast.error(error.userMessage || "Logout failed ! ❌");
      return rejectWithValue(error.userMessage);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    // register user
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      console.log(" register user in user slice", state.userData);

      state.isAuthenticated = true;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
    });

    // login user
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      console.log(" login user in user slice", state.userData);
      state.isAuthenticated = true;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
    });

    // logout user
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.userData = null;
      state.isAuthenticated = false;
    });

    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
    });
  },
});


export default authSlice.reducer;