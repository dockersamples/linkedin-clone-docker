import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {  
    login: (state,action) => {
      state.value = action.payload;
    },
     logout: (state, action) => {
      state.user = null;
    },
  },
});


export const { login, logout } = userSlice.actions;
export const selectUser = state => state.user.value;
//  A selector 

export default userSlice.reducer;


// https://youtu.be/QaYts9sPmcY?t=9582
// resume 