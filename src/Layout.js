import { Outlet, } from "react-router-dom";
import styled from "styled-components";

import { Header } from "./components/header/Header";

export const Layout = () => {

	return (
		<Layout.Wrapper>
			<Header />
			<Layout.StyledMain>
				<Outlet>
				</Outlet>
			</Layout.StyledMain>
		</Layout.Wrapper>
	 );
};

Layout.Wrapper = styled.div`
  margin: 0 auto;
  max-width: 360px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

Layout.StyledMain = styled.main`
  flex: 1 1 auto;
`;
