import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Menu from "../components/Menu/Menu.jsx";

const MainLayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 274px auto;
  background-color: var(--color-White);
  max-width: 908px;
  column-gap: 100px;
  padding: 16px;
  margin: auto;
  margin-top: 105px;
  border-radius: 15px;
  @media ${(props) => props.theme.media.tablet} {
    column-gap: 16px;
    max-width: 100%;
  }
  @media ${(props) => props.theme.media.phone} {
    border-radius: 0;
    padding: 0;
    background: none;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    width: 100%;
    height: 100%;
  }
`;

const MainLayout = () => {
  return (
    <MainLayoutStyle>
      <Menu />
      <Outlet />
    </MainLayoutStyle>
  );
};

export default MainLayout;
