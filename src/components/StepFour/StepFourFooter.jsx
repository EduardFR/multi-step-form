import styled from "styled-components";
import ButtonConfirm from "../Buttons/ButtonConfirm";
import ButtonGoBack from "../Buttons/ButtonGoBack";

const StepFourFooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 26px;
`;

function StepFourFooter() {
  return (
    <StepFourFooterStyle>
      <ButtonGoBack back="/Add-ons" />
      <ButtonConfirm confirm="/confirm" />
    </StepFourFooterStyle>
  );
}

export default StepFourFooter;
