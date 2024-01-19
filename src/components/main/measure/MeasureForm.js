import { useEffect } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Alert, TextField } from "@mui/material";

import { userInfo } from "../../../features/UserInfo/UserInfoSlice";

export const MeasureForm = ( { whoActive } ) => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const placeHolderHeight = whoActive === "Imperial" ? "(ft)" : "(cm)";
	const placeHolderWeight = whoActive === "Imperial" ? "(lbs)" : "(kg)";
	const maxWeight = whoActive === "Imperial" ? 400 : 220;
	const minWeight = whoActive === "Imperial" ? 90 : 40;
	const maxHeight = whoActive === "Imperial" ? 8 : 220;
	const minHeight = whoActive === "Imperial" ? 4 : 120;

	const errorMaxWeight = whoActive === "Imperial" ?
		"Weight must be less than 400 lbs" :
		"Weight must be less than 220 kg";
	const errorMinWeight = whoActive === "Imperial" ?
		"Weight must be more than 90 lbs" :
		"Weight must be more than 40 kg";
	const errorMaxHeight = whoActive === "Imperial" ?
		"Height must be less than 8 ft" :
		"Height must be less than 220 cm";
	const errorMinHeight = whoActive === "Imperial" ?
		"Height must be more than 4 ft" :
		"Height must be more than 120 cm";

	const formik = useFormik({
		initialValues: {
			weight: "",
			height: "",
		},
		onSubmit:      ( values ) => {
			dispatch(userInfo({ measure: values }));
			navigate("/behaviors");
		},
		validate:      ( values ) => {
			const errors = {};
			if (typeof values.weight ==="number" && values.weight < minWeight ) errors.weight = errorMinWeight;
			if (typeof values.weight ==="number" && values.weight > maxWeight ) errors.weight = errorMaxWeight;
			if (typeof values.height ==="number" && values.height < minHeight ) errors.height = errorMinHeight;
			if (typeof values.height ==="number" && values.height > maxHeight ) errors.height = errorMaxHeight;
			return errors;
		},
	});

	useEffect(() => {
		formik.validateForm()
	}, [formik.touched, whoActive ]);

	const isErrors = Object.keys(formik.errors).length === 0
	const isValue  = formik.values.weight>1 && formik.values.height>1;
	const isDisabled = isErrors  && isValue

	return (
		<MeasureForm.StyledForm onSubmit={ formik.handleSubmit }>
			<TextField
				error={!!formik.errors.weight }
				variant="outlined"
				type="number"
				name="weight"
				label={ `Weight ${ placeHolderWeight }` }
				value={ formik.values.weight }
				onChange={ formik.handleChange }
				onBlur={ ( e ) => {
					formik.handleBlur(e);
				} }
			/>
			{ formik.errors.weight && <Alert severity="error">{ formik.errors.weight }</Alert> }
			<TextField
				error={ !!formik.errors.height }
				variant="outlined"
				type="number"
				name="height"
				label={ `Height ${ placeHolderHeight }` }
				onChange={ formik.handleChange }
				value={ formik.values.height }
				onBlur={ ( e ) => {
					formik.handleBlur(e);
				} }
			/>
			{ formik.errors.height && <Alert severity="error">{ formik.errors.height }</Alert> }
			<MeasureForm.StyledButton
				type="submit"
				disabled={ !isDisabled}
			>
				<span>Continue</span>
			</MeasureForm.StyledButton>
		</MeasureForm.StyledForm>
	);
};

MeasureForm.StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 360px;
  gap: 10px;
  padding: 10px 0;
`;

MeasureForm.StyledButton = styled.button`
  position: absolute;
  bottom: 205px;
  width: inherit;
  text-align: center;
  background-color: ${ ( { disabled } ) => ( disabled ?
          "#cfefc4" :
          "#5fcb39" ) };
  border-radius: 12px;
  height: 50px;
  color: white;
  cursor: pointer;
  border: 0;
  font-size: 18px;
`;
