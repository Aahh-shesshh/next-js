import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const toogleSlice = createSlice({
  name: 'toogle',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
     state = !state

    }
  
  },
},

)

// Action creators are generated for each case reducer function
export const increment = toogleSlice.actions

export default toogleSlice.reducer