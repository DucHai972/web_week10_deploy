import { createSlice } from '@reduxjs/toolkit';

// Lấy token từ localStorage
const tokenFromStorage = localStorage.getItem('token');

console.log('Token: ', tokenFromStorage);
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: tokenFromStorage || null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
