import styled from "styled-components";
import ButtonNextStep from "../Buttons/ButtonNextStep";

const StepOneFooterStyle = styled.div`
  text-align: right;
`;

function StepOneFooter() {
  return (
    <StepOneFooterStyle>
      <ButtonNextStep step="step-two" />
    </StepOneFooterStyle>
  );
}

export default StepOneFooter;
