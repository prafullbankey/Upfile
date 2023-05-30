import { configureStore } from '@reduxjs/toolkit'
import contactSlice from '../../slice/contactSlice'

export const store = configureStore({
  reducer: {
    content: contactSlice,
  },
})