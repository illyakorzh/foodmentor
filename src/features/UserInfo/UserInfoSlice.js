import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	goal:     "",
	measure:  {},
	behavior: {},
	exercise: ""
};

const UserInfoSlice = createSlice({
	name:     "user",
	initialState,
	reducers: {
		userInfo: ( state, action ) => {
			return { ...state, ...action.payload };
		}
	}
});

export const { userInfo } = UserInfoSlice.actions;
export default UserInfoSlice.reducer;
