import styled from "styled-components";
import MenuStep from "./MenuStep";

const MenuStepsStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  margin-left: 32px;
  margin-top: 40px;
`;

function MenuSteps() {
  return (
    <MenuStepsStyle>
      <MenuStep value="1" title="YOUR INFO" active={true} />
      <MenuStep value="2" title="SELECT PLAN" />
      <MenuStep value="3" title="ADD-ONS" />
      <MenuStep value="4" title="SUMMARY" />
    </MenuStepsStyle>
  );
}

export default MenuSteps;
