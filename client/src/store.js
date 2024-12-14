import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import fileReducer from './features/fileSlice';
import uiReducer from './features/uiSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    file: fileReducer,
    ui: uiReducer
  }
});