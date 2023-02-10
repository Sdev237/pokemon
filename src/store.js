import { configureStore } from '@reduxjs/toolkit'
import poketReducer from './poketReducer'

export const store = configureStore({
  reducer: {
    poketReducer
  },
})

export default store;