import { MainHeader } from "./MainHeader";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Result = () => {
	const { behavior, exercise, goal, measure } = useSelector(state => state?.user);

	return ( <>
		<MainHeader
			header={ `Result` }
			title={ `We have something to tell about you` }
		/>

		<Result.StyledTable>
			<tbody>
				<tr>
					<td>
						<Result.Title>
							Your Goal:
						</Result.Title>
					</td>
					<td>
						<Result.Description>
							{ goal }
						</Result.Description>
					</td>
				</tr>
				<tr>
					<td>
						<Result.Title>
							Your Measure:
						</Result.Title>
					</td>
					<td>
						<Result.WrapperColumn>
							{ Object.keys(measure).map(key => <Result.Description>{ key }:{ measure[key] }</Result.Description>) }
						</Result.WrapperColumn></td>
				</tr>
				<tr>
					<td>
						<Result.Title>
							Your Destructive Behaviours:
						</Result.Title>
					</td>
					<td>
						<Result.WrapperColumn>
							{ Object.values(behavior)?.map(( text, index ) => (
								<Result.Description key={ index }>
									- { text }
								</Result.Description>
							)) }
						</Result.WrapperColumn></td>
				</tr>
				<tr>
					<td style={ { width: "100px" } }>
						<Result.Title>
							Your Physical Exercises:
						</Result.Title>
					</td>
					<td>
						<Result.Description >
							{ exercise }
						</Result.Description >
					</td>
				</tr>
			</tbody>

		</Result.StyledTable>

	</> );
};

Result.StyledTable = styled.table`

  td {
    vertical-align: top;
    padding-bottom: 20px
  }
`;
Result.WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

`;
Result.WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
`;

Result.Title = styled.span`
  color: var(--General-Black, #2D3436);
  font-size: 16.679px;
  font-weight: 500;
  line-height: 22.933px;
  letter-spacing: 0.208px;
`;

Result.Description = styled.span`
  color: var(--Gray-Gray-2, #616161);
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.25px;
  text-transform: capitalize;
	margin-left: 30px;
`;
