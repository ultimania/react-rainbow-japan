import { configureStore } from "@reduxjs/toolkit";
import { isHamburgerOpenReducer } from "./modules/isHamburgerOpenSlice";

export const store = configureStore({
  reducer: {
    isHamburgerOpen: isHamburgerOpenReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch