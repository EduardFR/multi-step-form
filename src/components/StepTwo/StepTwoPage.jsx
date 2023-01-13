import styled from "styled-components";
import StepTwoBody from "./StepTwoBody";
import StepTwoFooter from "./StepTwoFooter";
import StepTwoHeader from "./StepTwoHeader";

const StepTwoPageStyle = styled.div`
  text-align: left;
  margin-top: 40px;
  margin-right: 100px;
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
