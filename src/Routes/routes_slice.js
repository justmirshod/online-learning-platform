import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLayout: "wide",
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setActiveLayout: (state, { payload }) => {
      state.activeLayout = payload;
    },
  },
});

export const { setActiveLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
