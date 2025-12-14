import { axiosInstance } from "../../API/axiosInstance.js";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  rooms: [],
  ownerRooms: [],
  loading: false,
  error: null,
};

export const fetchRooms = createAsyncThunk(
  "room/fetchRooms",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/rooms");
      return response.data.data; // array of rooms
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to fetch rooms!";
      console.error("Fetch rooms failed:", message);
      return rejectWithValue(message);
    }
  }
);

export const fetchOwnerRooms = createAsyncThunk(
  "room/fetchOwnerRooms",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/rooms/owner");
      return response.data.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to fetch owner rooms?";
      console.error("Fetch owner rooms failed:", message);
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

export const createRoom = createAsyncThunk(
  "room/createRoom",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/rooms", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to create room!";
      console.error("Failed to create room:", message);
      return rejectWithValue(message);
    }
  }
);

export const toggleRoomAvailability = createAsyncThunk(
  "room/toggleAvailability",
  async (roomId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch("/rooms/toggle-availability", {
        roomId,
      });
      toast.success("Room availability updated!");
      return response.data.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to update room availability!";
      console.error("Failed to update room availability:", message);
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

const roomSlice = createSlice({
  name: "room",
  initialState,
  extraReducers: (builder) => {
    // FETCH PUBLIC ROOMS
    builder.addCase(fetchRooms.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      state.loading = false;
      state.rooms = action.payload;
    });

    builder.addCase(fetchRooms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // FETCH OWNER ROOMS
    builder.addCase(fetchOwnerRooms.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchOwnerRooms.fulfilled, (state, action) => {
      state.loading = false;
      state.ownerRooms = action.payload;
    });

    builder.addCase(fetchOwnerRooms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // CREATE ROOM
    builder.addCase(createRoom.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createRoom.fulfilled, (state, action) => {
      state.loading = false;
      state.ownerRooms.push(action.payload);
    });

    builder.addCase(createRoom.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // TOGGLE AVAILABILITY
    builder.addCase(toggleRoomAvailability.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(toggleRoomAvailability.fulfilled, (state, action) => {
      state.loading = false;
      const updatedRoom = action.payload;
      state.ownerRooms = state.ownerRooms.map((room) =>
        room._id === updatedRoom._id ? updatedRoom : room
      );
    });

    builder.addCase(toggleRoomAvailability.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});


export default roomSlice.reducer;