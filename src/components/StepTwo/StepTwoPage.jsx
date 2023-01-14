import styled from "styled-components";
import StepTwoBody from "./StepTwoBody";
import StepTwoFooter from "./StepTwoFooter";
import StepTwoHeader from "./StepTwoHeader";

const StepTwoPageStyle = styled.div`
  display: grid;
  grid-template-rows: 68px 240px 48px;
  row-gap: 40px;
  text-align: left;
  margin-top: 40px;
  margin-right: 84px;
`;

function StepTwoPage() {
  return (
    <StepTwoPageStyle>
      <StepTwoHeader />
      <StepTwoBody />
      <StepTwoFooter />
    </StepTwoPageStyle>
  );
}

export default StepTwoPage;
