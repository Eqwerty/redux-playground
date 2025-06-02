import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import flagReducer from "./flag/flagSlice";

export interface RootState {
  counter: CounterState;
  flag: FlagState;
}

export interface CounterState {
  value: number;
}

export interface FlagState {
  value: boolean;
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    flag: flagReducer,
  },
});
