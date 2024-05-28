import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = "https://avocet-backend.vercel.app";
export const API_URL = `${BACKEND_URL}/api/plastik/`;

export const fetchWastes = createAsyncThunk("wastes/fetchAll", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const fetchWaste = createAsyncThunk("wastes/fetchById", async (id) => {
  const response = await axios.get(`${API_URL}${id}`);
  return response.data;
});

export const createWaste = createAsyncThunk(
  "wastes/create",
  async (wasteData) => {
    const response = await axios.post(API_URL, wasteData);
    return response.data;
  }
);

export const deleteWaste = createAsyncThunk("wastes/delete", async (id) => {
  await axios.delete(`${API_URL}${id}`);
  return id;
});

export const updateWaste = createAsyncThunk(
  "wastes/update",
  async ({ id, wasteData }) => {
    const response = await axios.put(`${API_URL}${id}`, wasteData);
    return response.data;
  }
);

const wasteSlice = createSlice({
  name: "wastes",
  initialState: {
    wastes: [],
    waste: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWastes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWastes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.wastes = action.payload;
        toast.success = action.payload;
      })
      .addCase(fetchWastes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })

      // ========================================================
      .addCase(fetchWaste.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWaste.fulfilled, (state, action) => {
        state.waste = action.payload;
      })
      .addCase(fetchWaste.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })

      // =======================================================
      .addCase(createWaste.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createWaste.fulfilled, (state, action) => {
        state.wastes.push(action.payload);
        toast.success = action.payload;
      })
      .addCase(createWaste.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })

      // =======================================================
      .addCase(deleteWaste.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteWaste.fulfilled, (state, action) => {
        state.wastes = state.wastes.filter(
          (waste) => waste._id !== action.payload
        );
        toast.success = action.payload;
      })
      .addCase(deleteWaste.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      })

      // =======================================================
      .addCase(updateWaste.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateWaste.fulfilled, (state, action) => {
        const index = state.wastes.findIndex(
          (waste) => waste._id === action.payload._id
        );
        if (index !== -1) {
          state.wastes[index] = action.payload;
        }
        toast.success = action.payload;
      })
      .addCase(updateWaste.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error(action.error.message);
      });
  },
});

export default wasteSlice.reducer;
