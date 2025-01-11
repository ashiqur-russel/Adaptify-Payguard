import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  isSidebarCollapsed: boolean;
}

const initialState: IInitialState = {
  isSidebarCollapsed: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, actiion: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = actiion.payload;
    },
  },
});

export const { setIsSidebarCollapsed } = globalSlice.actions;
export default globalSlice.reducer;
