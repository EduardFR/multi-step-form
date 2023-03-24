import { useSelector } from "react-redux";
import styled from "styled-components";
import MenuStep from "./MenuStep";

const MenuStepsStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  margin-left: 32px;
  margin-top: 40px;
  @media ${(props) => props.theme.media.phone} {
    flex-direction: row;
    row-gap: 0;
    column-gap: 16px;
    margin-left: auto;
    margin-right: auto;
    height: 130px;
    position: relative;
    z-index: 5;
  }
`;

function MenuSteps() {
  const step = useSelector((state) => state.activeStep.step);

  return (
    <MenuStepsStyle>
      <MenuStep value="1" title="your info" active={step === "1"} />
      <MenuStep value="2" title="select plan" active={step === "2"} />
      <MenuStep value="3" title="add-ons" active={step === "3"} />
      <MenuStep value="4" title="summary" active={step === "4"} />
    </MenuStepsStyle>
  );
}

export default MenuSteps;
