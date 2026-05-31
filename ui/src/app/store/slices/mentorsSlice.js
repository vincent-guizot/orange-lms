import { createSlice } from "@reduxjs/toolkit";

const mentorsSlice = createSlice({
  name: "mentors",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers: {
    setMentors: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },

    setMentorsLoading: (state, action) => {
      state.loading = action.payload;
    },

    setMentorsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setMentors, setMentorsLoading, setMentorsError } =
  mentorsSlice.actions;

export default mentorsSlice.reducer;
