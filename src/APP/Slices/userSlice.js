import { axiosInstance } from "../../API/axiosInstance.js";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  userData: {
    role: null,
    recentlySearchedCities: [],
  },
  loading: false,
  error: null,
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/users");
      toast.success(response?.data?.message);
      return response?.data?.data;
    } catch (error) {
      const message = error.userMessage || "Fail to fetched userData!";
      console.error("Fetch userData failed:", message);
      toast.error(message || "Fail to fetched userData! ");
      return rejectWithValue(message);
    }
  }
);

export const addRecentCity = createAsyncThunk(
  "user/addRecentCity",
  async (city, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/recent-search-city", {
        recentSearchedCity: city,
      });
      return response.data?.data?.recentlySearchedCities;
    } catch (error) {
      const message =
        error.userMessage || "Failed to update recently searched city";
      console.error("Fetch userData failed:", message);
      toast.error(message || "Failed to update recently searched city! ");
      return rejectWithValue(message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    //Fetch User Data
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    });

    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });


    //Add Recent City
    builder.addCase(addRecentCity.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(addRecentCity.fulfilled, (state, action) => {
      state.loading = false;
      state.userData?.recentlySearchedCities = action.payload;
      s;
    });

    builder.addCase(addRecentCity.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;