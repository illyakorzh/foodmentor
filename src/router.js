import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";

import { Goal } from "./components/main/Goal";
import { Measure } from "./components/main/measure/Measure";
import { NotFound } from "./components/NotFound";
import { Behaviors } from "./components/main/Behaviors";
import { PhysicalExercise } from "./components/main/PhysicalExercise";
import { Result } from "./components/main/Result";


export const router = createBrowserRouter([
	{
		path:"/",
		element:<Layout/>,
		errorElement:<NotFound/>,
		children:[
				{	path:"/",element:<Goal/>},
				{	path:"/type",element:<Measure/>},
				{	path:"/behaviors",element:<Behaviors/>},
				{	path:"/exercise",element:<PhysicalExercise/>},
				{	path:"/result",element:<Result/>},
			]
	}
])

