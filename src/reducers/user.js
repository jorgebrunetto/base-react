import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'User',
  initialState: {
    name: 'Jorge',
  },
  reducers: {
    setUser: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { actions } = UserSlice;

export default UserSlice.reducer;
