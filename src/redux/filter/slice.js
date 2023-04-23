import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filer',
  initialState: 'all',
  reducers: {
    filterContacts(_, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
