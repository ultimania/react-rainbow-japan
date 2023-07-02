import {createSlice} from '@reduxjs/toolkit'

const initialState = false

export const isHamburgerOpenSlice = createSlice({
  name: "hamburgerToggle",
  initialState: initialState,
  reducers: {
    toggle: (state) => !state
  }
})

// action
export const { toggle } = isHamburgerOpenSlice.actions

// reducer
export const isHamburgerOpenReducer = isHamburgerOpenSlice.reducer