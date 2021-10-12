import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  settings: null
}
export const settingsReducer = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    saveSettings: (state, payload) => {
      state.settings = payload.payload;
    },
  },
})

export const { actions } = settingsReducer;
export default settingsReducer.reducer;
