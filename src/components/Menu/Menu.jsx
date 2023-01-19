import styled from "styled-components";
import MenuSteps from "./MenuSteps";
import AnimationBlock from "./AnimationBlock";

const MenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-Purple);
  text-align: left;
  border-radius: 10px;
  @media ${(props) => props.theme.media.phone} {
    border-radius: 0;
    flex-direction: row;
  }
`;

function Menu() {
  return (
    <MenuStyle>
      <MenuSteps />
      <AnimationBlock />
    </MenuStyle>
  );
}

export default Menu;
