import { createSlice } from "@reduxjs/toolkit";

export const flagSlice = createSlice({
  name: "flag",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = flagSlice.actions;

export default flagSlice.reducer;
