import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false
}

export const hamburgerSlice = createSlice({
  name: 'hamburger',
  initialState,
  reducers: {
    changeHamurger: (state) => {
      state.value = !state.value
    },
    closeHamburger: (state) => {
      state.value = false
    }
  },
})

export const { changeHamurger, closeHamburger } = hamburgerSlice.actions
export default hamburgerSlice.reducer