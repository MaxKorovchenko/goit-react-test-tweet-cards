import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64429f6176540ce225915ac9.mockapi.io/api/v1';

export const fetchUsers = createAsyncThunk(
  'tweets/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users');

      return data;
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);
