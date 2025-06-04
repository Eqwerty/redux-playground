import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

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

export const selectFlag = (state: RootState): boolean => state.flag.value;

export default flagSlice.reducer;
