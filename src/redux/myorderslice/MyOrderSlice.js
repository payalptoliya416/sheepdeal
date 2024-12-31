import { createSlice } from '@reduxjs/toolkit';

const myOrderSlice = createSlice({
  name: 'order',
  initialState: {
    isMyorderOpen: false,
    isProfileOpen: false,
    isMyAddressOpen: false,
    isManageAddressOpen: false,
  },
  reducers: {
    openMyorder: (state) => {
      state.isMyorderOpen = true;
      state.isProfileOpen = false;
      state.isMyAddressOpen = false;
      state.isManageAddressOpen = false;
    },
    closeMyorder: (state) => {
      state.isMyorderOpen = false;
    },
    openProfile: (state) => {
      state.isProfileOpen = true;
      state.isMyorderOpen = false;
      state.isMyAddressOpen = false;
      state.isManageAddressOpen = false;
    },
    closeProfile: (state) => {
      state.isProfileOpen = false;
    },
    openMyAddress: (state) => {
      state.isMyAddressOpen = true;
      state.isMyorderOpen = false;
      state.isProfileOpen = false;
      state.isManageAddressOpen = false;
    },
    closeMyAddress: (state) => {
      state.isMyAddressOpen = false;
    },
    openManageAddress: (state) => {
      state.isManageAddressOpen = true;
      state.isMyorderOpen = false;
      state.isProfileOpen = false;
      state.isMyAddressOpen = false;
    },
    closeManageAddress: (state) => {
      state.isManageAddressOpen = false;
    },
  },
});

export const {
  openMyorder,
  closeMyorder,
  openProfile,
  closeProfile,
  openMyAddress,
  closeMyAddress,
  openManageAddress,
  closeManageAddress,
} = myOrderSlice.actions;
export const selectIsMyorderOpen = (state) => state.order.isMyorderOpen;
export const selectIsProfileOpen = (state) => state.order.isProfileOpen;
export const selectIsMyAddressOpen = (state) => state.order.isMyAddressOpen;
export const selectIsManageAddressOpen = (state) => state.order.isManageAddressOpen;
export default myOrderSlice.reducer;
