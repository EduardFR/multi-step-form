import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Menu from "../components/Menu/Menu.jsx";

const MainLayoutStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-White);
  max-width: 940px;
  column-gap: 100px;
  padding: 16px;
  margin: auto;
  margin-top: 105px;
  border-radius: 15px;
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
