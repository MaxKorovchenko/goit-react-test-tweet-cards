import { createSlice } from '@reduxjs/toolkit';

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {},
});
