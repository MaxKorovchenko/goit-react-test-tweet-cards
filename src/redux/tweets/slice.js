import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    });
  },
});
