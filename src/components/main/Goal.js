import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, } from "react-router-dom";
import styled from "styled-components";

import { MainHeader } from "../../components/main/MainHeader";
import { userInfo } from "../../features/UserInfo/UserInfoSlice";

export const Goal = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const goalData = useSelector(state1 => state1.data.goalData);

	const updateInfo = ( e ) => {
		dispatch(userInfo({ goal: e.currentTarget.textContent }));
		navigate("/type");
	};

	return ( <>
		<MainHeader
			header={ `The Goal` }
			title={ `Focus on the health benefits you need. \n Balanced nutrition will let you achieve them.` }
			subtitle={ `What are your goals?` }
			maxWidth={ "340px" }
		/>
		<Goal.CardWrapper>
			{ goalData?.map(( { id, text, img, alt } ) => (
				<Goal.Card key={ id } onClick={ ( e ) => updateInfo(e) }>
					<Goal.CardDescription>{ text }</Goal.CardDescription>
					<Goal.Image src={ img } alt={ alt } />
				</Goal.Card>
			)) }
		</Goal.CardWrapper>
	</> );
};

Goal.CardWrapper = styled.div`
  margin-top: 15px;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, fit-content(170px));
  justify-content: center;
  @media (max-width: 400px) {
    grid-template-columns: fit-content(170px); /* Single-column layout for smaller screens */
  }
`;

Goal.Image = styled.img`
  width: 50%;
  height: 100%;
`;

Goal.Card = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 20.848px;
  border: 1.042px solid var(--Separator-Light, #E1E1E1);
  background: linear-gradient(214deg, #F1F1F1 12.33%, #FFF 69.93%);
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`;

Goal.CardDescription = styled.span`
  color: var(--General-Black, #2D3436);
  font-size: 16.679px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.933px;
  letter-spacing: 0.208px;
  margin-left: 10px;
`;

