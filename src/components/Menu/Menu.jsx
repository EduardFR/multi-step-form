import styled from "styled-components";
import MenuSteps from "./MenuSteps";

const MenuStyle = styled.div`
  background-color: var(--color-Purple);
  text-align: left;
  height: 568px;
  width: 274px;
  border-radius: 10px;
`;

function Menu() {
  return (
    <MenuStyle>
      <MenuSteps />
    </MenuStyle>
  );
}

export default Menu;
