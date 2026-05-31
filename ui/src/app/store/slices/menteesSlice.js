import { createSlice } from "@reduxjs/toolkit";

const menteesSlice = createSlice({
  name: "mentees",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers: {
    setMentees: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },

    setMenteesLoading: (state, action) => {
      state.loading = action.payload;
    },

    setMenteesError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setMentees, setMenteesLoading, setMenteesError } =
  menteesSlice.actions;

export default menteesSlice.reducer;
