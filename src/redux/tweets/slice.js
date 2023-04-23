import { createSlice } from '@reduxjs/toolkit';

import { editUser, fetchUsers } from './operations';

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = state.users.map(user => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              followers: action.payload.followers,
              isFollowing: action.payload.isFollowing,
            };
          }

          return user;
        });
      })
      .addCase(editUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
