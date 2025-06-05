import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export const selectCount = (state: RootState): number => state.counter.value;

export default counterSlice.reducer;
