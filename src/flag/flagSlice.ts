import { createSlice } from "@reduxjs/toolkit";
import type { FlagState } from "../store";

const initialState: FlagState = {
  value: false,
};

export const flagSlice = createSlice({
  name: "flag",
  initialState,
  reducers: {
    toggle: (state: FlagState) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = flagSlice.actions;

export default flagSlice.reducer;
