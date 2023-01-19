import { useSelector } from "react-redux";
import styled from "styled-components";
import SelectedAdditions from "./SelectedAdditions";
import SelectedPlan from "./SelectedPlan";
import TotalPrice from "./TotalPrice";

const StepFourBodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.media.phone} {
    margin-right: 16px;
    margin-left: 16px;
    padding: 32px 24px;
    border-radius: 10px;
    z-index: 10;
    background-color: var(--color-White);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

function StepFourBody() {
  const billing = useSelector((state) => state.billing.value);
  const activePlan = useSelector((state) => state.activePlan.value);
  const selectedAdditions = useSelector(
    (state) => state.selectedAdditions.additions
  );

  return (
    <StepFourBodyStyle>
      <SelectedPlan billing={billing} activePlan={activePlan} />
      <SelectedAdditions
        billing={billing}
        selectedAdditions={selectedAdditions}
      />
      <TotalPrice
        billing={billing}
        activePlan={activePlan}
        selectedAdditions={selectedAdditions}
      />
    </StepFourBodyStyle>
  );
}

export default StepFourBody;
