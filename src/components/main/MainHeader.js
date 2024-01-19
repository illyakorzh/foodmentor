import styled from "styled-components";

export const MainHeader = ( { header, title, subtitle, maxWidth } ) => {

	return (
		<MainHeader.Wrapper>
			<MainHeader.WrapperTitle maxWidth={ maxWidth }>
				<MainHeader.Header>{ header }</MainHeader.Header>
				<MainHeader.Title>{ title }</MainHeader.Title>
			</MainHeader.WrapperTitle>
			{ subtitle?.length > 0 && subtitle ?
				<MainHeader.SubTitle>{ subtitle }</MainHeader.SubTitle> :
				null }
		</MainHeader.Wrapper>
	);
};

MainHeader.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

MainHeader.WrapperTitle = styled.div`
  padding: 15px;
  max-width: ${ ( { maxWidth } ) => maxWidth || "100%" }
`;

MainHeader.Header = styled.h2`
  color:  #2D3436;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.25px;`;

MainHeader.Title = styled.h3`
  color: #616161;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.25px;
`;

MainHeader.SubTitle = styled.h3`
  color: #2D3436;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
`;
