import styled from "styled-components";
import ButtonGoBack from "../Buttons/ButtonGoBack";
import ButtonNextStep from "../Buttons/ButtonNextStep";

const StepTwoFooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 74px;
`;

function StepTwoFooter() {
  return (
    <StepTwoFooterStyle>
      <ButtonGoBack back="/" />
      <ButtonNextStep step="/Add-ons" />
    </StepTwoFooterStyle>
  );
}

export default StepTwoFooter;
