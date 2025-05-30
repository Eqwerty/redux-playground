import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export interface RootState {
  counter: CounterState;
}

export interface CounterState {
  value: number;
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
