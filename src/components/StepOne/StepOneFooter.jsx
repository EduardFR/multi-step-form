import styled from "styled-components";
import ButtonNextStep from "../Buttons/ButtonNextStep";

const StepOneFooterStyle = styled.div`
  margin-top: 50px;
  text-align: right;
`;

function StepOneFooter() {
  return (
    <StepOneFooterStyle>
      <ButtonNextStep step="/Select-plan" />
    </StepOneFooterStyle>
  );
}

export default StepOneFooter;
