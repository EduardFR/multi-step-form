import styled from "styled-components";
import ButtonGoBack from "../Buttons/ButtonGoBack";
import ButtonNextStep from "../Buttons/ButtonNextStep";

const StepThreeFooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

function StepThreeFooter() {
  return (
    <StepThreeFooterStyle>
      <ButtonGoBack back="/step-two" />
      <ButtonNextStep step="/step-four" />
    </StepThreeFooterStyle>
  );
}

export default StepThreeFooter;
