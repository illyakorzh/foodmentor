import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	goalData:     [],
	behaviorData: [],
	exerciseData: [],
};

export const getData = createAsyncThunk(
	"data/getData",
	async ( _, { rejectWithValue, dispatch } ) => {
		try {
			const response = await axios.get("../data.json");
			dispatch(addData(response.data));
		} catch ( error ) {
			return rejectWithValue(error.message);
		}
	}
);

const DataSlice = createSlice({
	name:     "data",
	initialState,
	reducers: {
		addData: ( state, action ) => {
			return { ...state, ...action.payload };
		},
	},
});

export const { addData } = DataSlice.actions;
export default DataSlice.reducer;








