import { configureStore } from '@reduxjs/toolkit'
import hamburgerReducer from './hamburgerSlice'

export const store = configureStore({
  reducer: {
    hamburger: hamburgerReducer,
  },
})