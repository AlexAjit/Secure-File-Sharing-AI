import { createSlice } from '@reduxjs/toolkit';
import api from '../utils/api';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    registerStart(state) {
      state.loading = true;
      state.error = null;
    },
    registerSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    registerFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    mfaStart(state) {
      state.loading = true;
      state.error = null;
    },
    mfaSuccess(state, action) {
      state.loading = false;
      state.user = { ...state.user, mfaVerified: true };
    },
    mfaFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { 
  loginStart, 
  loginSuccess, 
  loginFailure, 
  logout, 
  registerStart, 
  registerSuccess, 
  registerFailure,
  mfaStart,
  mfaSuccess,
  mfaFailure 
} = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await api.post('/auth/login/', credentials);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const register = (userData) => async (dispatch) => {
  dispatch(registerStart());
  try {
    const response = await api.post('/auth/register/', userData);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export const mfa = ({ email, code }) => async (dispatch) => {
  dispatch(mfaStart());
  try {
    const response = await api.post('/auth/mfa/', { email, code });
    dispatch(mfaSuccess(response.data));
  } catch (error) {
    dispatch(mfaFailure(error.message));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await api.post('/auth/logout/');
    dispatch(logout());
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

export default authSlice.reducer;