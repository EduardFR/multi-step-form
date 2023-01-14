import styled from "styled-components";
import ConfirmImage from "./ConfirmImage";
import ConfirmText from "./ConfirmText";
import ConfirmTitle from "./ConfirmTitle";

const StepFivePageStyle = styled.div`
  text-align: center;
  margin-top: 165px;
  margin-right: 84px;
`;

function StepFivePage() {
  return (
    <StepFivePageStyle>
      <ConfirmImage />
      <ConfirmTitle />
      <ConfirmText />
    </StepFivePageStyle>
  );
}

export default StepFivePage;
