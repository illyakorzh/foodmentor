import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { MainHeader } from "../../components/main/MainHeader";
import { userInfo } from "../../features/UserInfo/UserInfoSlice";

export const Behaviors = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const behaviorData = useSelector(( state ) => state.data.behaviorData);
	const [ behavior, setBehavior ] = useState({});

	const handleBlockClick = ( blockId, text ) => {
		if ( behavior.hasOwnProperty(blockId) ) {
			setBehavior(( prevState ) => {
				const {
					[blockId]: deletedValue,
					...newState
				} = prevState;
				return newState;
			});
		} else {
			setBehavior(( prevState ) => ( {
				...prevState,
				[blockId]: text
			} ));
		}
	};

	const handleConfirm = () => {
		dispatch(userInfo({ behavior }));
		navigate("/exercise");
	};

	return ( <Behaviors.Wrapper>
		<MainHeader
			header={ "Destructive behaviors" }
			title={ "We all have them! Which are yours?" }
		/>
		<Behaviors.CardWrapper>
			{ behaviorData?.map(( { id, text, img, alt } ) => ( <Behaviors.Card
				key={ id }
				onClick={ () => handleBlockClick(id, text) }
				isSelected={ behavior.hasOwnProperty(id) }
			>
				<Behaviors.Image src={ img } alt={ alt } />
				<Behaviors.CardDescription>{ text }</Behaviors.CardDescription>
			</Behaviors.Card> )) }
		</Behaviors.CardWrapper>
		<Behaviors.StyledButton
			type="submit"
			onClick={ handleConfirm }
			disabled={ Object.values(behavior).length < 1 }
		>
			<span>
				Continue
			</span>
		</Behaviors.StyledButton>

	</Behaviors.Wrapper> );
};

Behaviors.Wrapper = styled.div`
  height: 100%;
`;

Behaviors.CardWrapper = styled.div`
  margin-top: 15px;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, fit-content(170px));
  justify-content: center;
  @media (max-width: 400px) {
    grid-template-columns: fit-content(170px);
  }
`;

Behaviors.Image = styled.img`
  width: 30px;
  height: 30px;
`;

Behaviors.Card = styled.div`
  cursor: pointer;
  display: flex;
  width: 172px;
  height: 60px;
  padding: 12px 24px 12px 15px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 15px;
  border: ${ ( { isSelected } ) => isSelected ?
          "2px solid lightblue" :
          "1px solid var(--Separator-Light, #E1E1E1)" };
  background: ${ ( { isSelected } ) => isSelected ?
          "lightblue" :
          "var(--Background-Light, #FFF)" };
`;

Behaviors.CardDescription = styled.span`
  width: 93px;
  color: #2D3436;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.3px;
`;

Behaviors.StyledButton = styled.button`
  position: absolute;
  bottom: 205px;
  width: 360px;
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
