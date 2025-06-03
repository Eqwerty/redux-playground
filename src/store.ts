import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import flagReducer from "./flag/flagSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    flag: flagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
