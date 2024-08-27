import { createSlice } from "@reduxjs/toolkit"


const initialCartShow = {
  cartIsVisible: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialCartShow,
  reducers:{
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;