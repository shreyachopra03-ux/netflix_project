import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

const initialState: UserState = {
  uid: null,
  email: null,
  displayName: null,
  photoURL: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserState>) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
    },
    removeUser: (state) => {
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
    }
  } 
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;