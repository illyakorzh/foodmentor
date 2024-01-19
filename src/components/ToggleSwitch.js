import styled from "styled-components";

export const ToggleSwitch = ( { whoActive, setWhoActive } ) => {

	return (
		<ToggleSwitch.Wrapper>
			<ToggleSwitch.Imperial
				whoActive={ whoActive }
				onClick={ () => setWhoActive("Imperial") }
			>
				<ToggleSwitch.Text>
					Imperial
				</ToggleSwitch.Text>
			</ToggleSwitch.Imperial>
			<ToggleSwitch.Metric
				whoActive={ whoActive }
				onClick={ () => setWhoActive("Metric") }
			>
				<ToggleSwitch.Text>
					Metric
				</ToggleSwitch.Text>
			</ToggleSwitch.Metric>
		</ToggleSwitch.Wrapper>
	);
};

ToggleSwitch.Wrapper = styled.div`
  border-radius: 10px;
  border: 1px solid var(--primary-100, #5FCB39);
  display: flex;
  width: 360px;
  height: 32px;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  overflow: hidden;
`;

ToggleSwitch.Boolean = styled.div`
  width: 50%;
  height: 100%;
  transition-duration: 1s;
  transition-timing-function: ease-in;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

ToggleSwitch.Imperial = styled(ToggleSwitch.Boolean)`
  background-color: ${ ( { whoActive } ) => ( whoActive === "Imperial" ?
          "#cfefc4" :
          "transparent" ) };
`;

ToggleSwitch.Metric = styled(ToggleSwitch.Boolean)`
  background-color: ${ ( { whoActive } ) => ( whoActive === "Metric" ?
          "#cfefc4" :
          "transparent" ) };
`;

ToggleSwitch.Text = styled.span`
  color: #4caf50;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;`;
