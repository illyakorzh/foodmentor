import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { getData } from "./features/Data/DataSlice";

export const App = () => {

	const dispatch = useDispatch();

	useEffect(() => {dispatch(getData());}, []);

	return <RouterProvider router={ router } />;
};
