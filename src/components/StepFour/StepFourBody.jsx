import styled from "styled-components";
import SelectedAdditions from "./SelectedAdditions";
import SelectedPlan from "./SelectedPlan";
import TotalPrice from "./TotalPrice";

const StepFourBodyStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

function StepFourBody() {
  return (
    <StepFourBodyStyle>
      <SelectedPlan />
      <SelectedAdditions />
      <TotalPrice />
    </StepFourBodyStyle>
  );
}

export default StepFourBody;
