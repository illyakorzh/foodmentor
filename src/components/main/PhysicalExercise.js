import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { MainHeader } from "../main/MainHeader";
import { userInfo } from "../../features/UserInfo/UserInfoSlice";
import { useNavigate } from "react-router-dom";

export const PhysicalExercise = () => {
	const exercise = useSelector(state => state.data.exerciseData);
	const dispatch = useDispatch();
	const navigate =useNavigate()

	const updateInfo = ( e ) => {
		dispatch(userInfo({ exercise: e.currentTarget.textContent }));
		navigate("/result")
	};

	return (
		<>
			<MainHeader
				header={ "Physical exercise" }
				title={ "Physical exercise means a lot for a woman who wants to lose kilos and works at the office" }
				subtitle={ "How active are you during the day?" }
			/>
			<PhysicalExercise.Wrapper>
				<PhysicalExercise.Immage src="https://i.imgur.com/8RJtSe1.png" alt="girl" />
				<PhysicalExercise.WrapperCard>
					{ exercise?.map(( { id, text } ) => (
						<PhysicalExercise.Card key={ id } onClick={ ( e ) => updateInfo(e) }>
							<span>{ text }</span>
						</PhysicalExercise.Card>
					)) }
				</PhysicalExercise.WrapperCard>
			</PhysicalExercise.Wrapper>
		</>
	);
};

PhysicalExercise.Wrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

PhysicalExercise.Immage = styled.img`
  height: 273px;
  width: 173px;
  margin: 35px 0 53px;
`;

PhysicalExercise.WrapperCard = styled(PhysicalExercise.Wrapper)`
  width: 100%;
  margin-top: 0;
  flex-direction: column;
`;

PhysicalExercise.Card = styled.div`
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid #E1E1E1;
  background: #FFF;
  display: flex;
  width: 172px;
  height: 80px;
  padding: 18px 15px;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
`;

PhysicalExercise.StyledText = styled.span`
  color: #2D3436;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
`;
