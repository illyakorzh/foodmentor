import { configureStore } from "@reduxjs/toolkit";
import UserInfoSlice from "../features/UserInfo/UserInfoSlice";
import DataSlice from "../features/Data/DataSlice";
import { localStoredReducer } from "../features/LocalStorage/localStorageSlice";

export const store = configureStore({
	reducer: {
		user: localStoredReducer(UserInfoSlice, "user"),
		data: DataSlice,
	},
});
