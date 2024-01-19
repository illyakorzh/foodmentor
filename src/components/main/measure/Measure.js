import styled from "styled-components";
import { useState } from "react";

import { MeasureForm } from "./MeasureForm";
import { MainHeader } from "../../../components/main/MainHeader";
import { ToggleSwitch } from "../../../components/ToggleSwitch";

export const Measure = () => {

	const [ whoActive, setWhoActive ] = useState("Imperial");

	return (
		<Measure.Wrapper>
			<MainHeader
				header={ "Measure Yourself" }
				title={ "What are your height and body weight?" }
			/>
			<ToggleSwitch
				whoActive={ whoActive }
				setWhoActive={ setWhoActive }
			/>
			<MeasureForm
				whoActive={ whoActive }
			/>
		</Measure.Wrapper>
	);
};
Measure.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
