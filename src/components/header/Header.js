import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {

	const { pathname } = useLocation();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<header>
			<Header.Wrapper>
				{ pathname !== "/" &&
					<Header.Back src={ "https://i.imgur.com/WLI9sXR.png" } alt="BackImg" onClick={ goBack } /> }
				<Header.Avocado src={ "https://i.imgur.com/HaM3s2J.png" } alt="AvocadoImg" />
				<Header.Title>Food Mentor</Header.Title>
			</Header.Wrapper>
		</header>
	);
};

Header.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 9px;
`;

Header.Avocado = styled.img`
  width: 34px;
  height: 34px;
  gap: 10px;
`;

Header.Back = styled.img`
  width: 10px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

Header.Title = styled.h1`color: #374234;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.45px;`;
