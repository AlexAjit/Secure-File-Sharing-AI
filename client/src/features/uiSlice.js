import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    modalOpen: false,
    modalContent: null,
  },
  reducers: {
    openModal(state, action) {
      state.modalOpen = true;
      state.modalContent = action.payload;
    },
    closeModal(state) {
      state.modalOpen = false;
      state.modalContent = null;
    },
  },
});

export const { openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;