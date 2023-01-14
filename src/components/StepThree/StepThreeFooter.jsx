import styled from "styled-components";
import ButtonGoBack from "../Buttons/ButtonGoBack";
import ButtonNextStep from "../Buttons/ButtonNextStep";

const StepThreeFooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 39px;
`;

function StepThreeFooter() {
  return (
    <StepThreeFooterStyle>
      <ButtonGoBack back="/Select-plan" />
      <ButtonNextStep step="/Summary" />
    </StepThreeFooterStyle>
  );
}

export default StepThreeFooter;
