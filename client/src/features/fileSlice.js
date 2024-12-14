import { createSlice } from '@reduxjs/toolkit';
import api from '../utils/api';

const fileSlice = createSlice({
  name: 'file',
  initialState: {
    files: [],
    loading: false,
    error: null,
  },
  reducers: {
    uploadStart(state) {
      state.loading = true;
      state.error = null;
    },
    uploadSuccess(state, action) {
      state.loading = false;
      state.files.push(action.payload);
    },
    uploadFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchFilesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchFilesSuccess(state, action) {
      state.loading = false;
      state.files = action.payload;
    },
    fetchFilesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { 
  uploadStart, 
  uploadSuccess, 
  uploadFailure, 
  fetchFilesStart, 
  fetchFilesSuccess, 
  fetchFilesFailure 
} = fileSlice.actions;

export const uploadFile = (fileData, fileName) => async (dispatch) => {
  dispatch(uploadStart());
  try {
    const response = await api.post('/files/', { file: fileData, name: fileName });
    dispatch(uploadSuccess(response.data));
  } catch (error) {
    dispatch(uploadFailure(error.message));
  }
};

export const fetchFiles = () => async (dispatch) => {
  dispatch(fetchFilesStart());
  try {
    const response = await api.get('/files/');
    dispatch(fetchFilesSuccess(response.data));
  } catch (error) {
    dispatch(fetchFilesFailure(error.message));
  }
};

export default fileSlice.reducer;