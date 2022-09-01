import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginUser } from './userAPI';

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

export const loginAsync = createAsyncThunk(
    'user/loginUser',
    async (email, password) => {
      const response = await loginUser(email, password);
      // The value we return becomes the `fulfilled` action payload
      return response;
    }
);

export const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state) => {
        state.status = 'idle';
        state.value = true;
      });
  },
})

// Action creators are generated for each case reducer function
export const { setEmail, setPassword, setLoading } = userSlice.actions

export default userSlice.reducer