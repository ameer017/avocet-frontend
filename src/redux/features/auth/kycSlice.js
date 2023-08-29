import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import kycService from "./kycService";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    user: null
}

// create Kyc 
export const createKyc = createAsyncThunk(
    'kyc/kyc-verification',
    async(kycData, thunkAPI) => {
        try {
            return await kycService.createKyc(kycData)
        } catch (error) {
            const message = (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)


const kycSlice = createSlice({
    name: 'kyc',
    initialState,
    reducers: {
        RESET(state) {
            state.isError = false;
            state.isSuccess = false;
            state.isSuccess = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createKyc.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createKyc.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
            toast.success("Registration Successful");
            console.log(action.payload);
        })
        .addCase(createKyc.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
            toast.error(action.payload);
        })
    }
})

export const {RESET} = kycSlice.actions;

export const selectKyc = (state) => state.kyc
export default kycSlice.reducer