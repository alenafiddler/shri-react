import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from './store/settingsReducer'

export const store = configureStore({
  reducer: {
    settingsReducer
  },
})
