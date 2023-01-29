import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { plans } from "../../constants/plans";

const SelectedPlanStyle = styled.div`
  padding: 16px 24px 0;
  background-color: var(--color-VeryLightGrey);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const SelectedPlanBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-Grey);
`;

const PlanBlock = styled.div``;

const PlanName = styled.h3`
  text-align: left;
  margin-bottom: 7px;
`;

const ChangePlan = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-Grey);
  border-bottom: 1px solid var(--color-Grey);
  text-align: left;
  &:hover {
    color: var(--color-Purple);
    border-bottom: 1px solid var(--color-Purple);
  }
`;

const PlanPrice = styled.h1`
  font-size: 16px;
  line-height: 20px;
  text-align: right;
`;

function SelectedPlan({ billing, activePlan }) {
  const plan = plans.find((plan) => plan.name.match(activePlan));

  const isMonthly = () => {
    return billing === "Monthly";
  };

  return (
    <SelectedPlanStyle>
      <SelectedPlanBlock>
        <PlanBlock>
          <PlanName>
            {plan.name}({billing})
          </PlanName>
          <ChangePlan to="/select-plan">Change</ChangePlan>
        </PlanBlock>
        <PlanPrice>
          ${isMonthly() ? plan.price.monthly : plan.price.yearly}/
          {isMonthly() ? plan.abbreviations.monthly : plan.abbreviations.yearly}
        </PlanPrice>
      </SelectedPlanBlock>
    </SelectedPlanStyle>
  );
}

export default SelectedPlan;
