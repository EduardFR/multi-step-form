import styled from "styled-components";
import StepFourBody from "./StepFourBody";
import StepFourFooter from "./StepFourFooter";
import StepFourHeader from "./StepFourHeader";

const StepFourPageStyle = styled.div`
  display: grid;
  grid-template-rows: 68px 288px 48px;
  row-gap: 40px;
  text-align: left;
  margin-top: 40px;
  margin-right: 84px;
`;

function StepFourPage() {
  return (
    <StepFourPageStyle>
      <StepFourHeader />
      <StepFourBody />
      <StepFourFooter />
    </StepFourPageStyle>
  );
}

export default StepFourPage;
