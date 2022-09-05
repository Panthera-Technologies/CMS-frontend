import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAction from "./userAction";

//GET USER FROM LOCALSTORAGE
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  loading: false,
  user: user ? user : null, // for user object
  error: false,
  success: false, // for monitoring the registration process.
  message: "",
};

export const register = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      return await userAction.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

        return thunkAPI.rejectWithValue(message)
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      return await userAction.login(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

        return thunkAPI.rejectWithValue(message)
    }
  }
);

export const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.user = null;
      })
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, setPassword, setLoading, reset } = userSlice.actions;

export default userSlice.reducer;
