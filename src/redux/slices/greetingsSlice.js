import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://127.0.0.1:3000/random_greeting';
const http = axios.create({ baseURL: BASE_URL });

const initialState = {
  isLoading: false,
  isFailed: false,
  greetings: null,
};

export const fetchGreetingsThunk = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const { data } = await http.get();
    console.log(data);
    return data.content;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGreetingsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.greetings = action.payload;
      console.log(action.payload)
    },
    [fetchGreetingsThunk.pending]: (state) => { state.isLoading = true; },
    [fetchGreetingsThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default greetingsSlice.reducer;