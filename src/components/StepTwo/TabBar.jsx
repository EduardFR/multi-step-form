import styled from "styled-components";
import Tab from "./Tab";
import { plans } from "../../constants/plans";
import { useDispatch, useSelector } from "react-redux";
import { getActivePlanAction } from "../../store/activePlanReducer";

const TabBarStyle = styled.div`
  display: flex;
  column-gap: 18px;
  @media ${(props) => props.theme.media.tablet} {
    flex-direction: column;
    column-gap: 0;
    row-gap: 12px;
  }
  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
    column-gap: 0;
    row-gap: 12px;
  }
`;

function TabBar({ billing }) {
  const dispatch = useDispatch();
  const activePlan = useSelector((state) => state.activePlan.value);

  const isMonthly = () => {
    return billing === "Monthly";
  };

  const onClick = (name) => {
    dispatch(getActivePlanAction(name));
  };

  return (
    <TabBarStyle>
      {plans.map((plan) => (
        <Tab
          key={plan.name}
          name={plan.name}
          activePlan={activePlan}
          onClick={() => onClick(plan.name)}
          price={isMonthly() ? plan.price.monthly : plan.price.yearly}
          abbreviation={
            isMonthly() ? plan.abbreviations.monthly : plan.abbreviations.yearly
          }
          color={plan.color}
          src={plan.src}
          billing={isMonthly() ? "" : "active"}
        />
      ))}
    </TabBarStyle>
  );
}

export default TabBar;
