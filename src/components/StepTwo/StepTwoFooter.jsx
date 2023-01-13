import styled from "styled-components";
import ButtonGoBack from "../Buttons/ButtonGoBack";
import ButtonNextStep from "../Buttons/ButtonNextStep";

const StepTwoFooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

function StepTwoFooter() {
  return (
    <StepTwoFooterStyle>
      <ButtonGoBack back="/" />
      <ButtonNextStep step="/step-three" />
    </StepTwoFooterStyle>
  );
}

export default StepTwoFooter;
