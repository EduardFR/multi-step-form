import styled from "styled-components";
import { additions } from "../../constants/additions";
import { plans } from "../../constants/plans";

const TotalPriceBlockStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 24px 0;
`;

const TotalName = styled.p`
  font-size: 14px;
  line-height: 20px;
  text-align: left;
`;

const TotalPricestyle = styled.h1`
  font-size: 20px;
  line-height: 20px;
  text-align: right;
  color: var(--color-Purple);
`;

function TotalPrice({ billing, activePlan, selectedAdditions }) {
  const isMonthly = () => {
    return billing === "Monthly";
  };

  const plan = plans.find((plan) => plan.name.match(activePlan));

  const activeAddition = additions.filter((addition) =>
    selectedAdditions.includes(addition.name)
  );
  const totalAdditions = () => {
    if (billing === "Monthly") {
      return activeAddition.reduce(
        (acc, addition) => acc + addition.price.monthly,
        0
      );
    }
    if (billing === "Yearly") {
      return activeAddition.reduce(
        (acc, addition) => acc + addition.price.yearly,
        0
      );
    }
  };

  const totalPrice = () => {
    if (billing === "Monthly") {
      return totalAdditions() + plan.price.monthly;
    }
    if (billing === "Yearly") {
      return totalAdditions() + plan.price.yearly;
    }
  };

  return (
    <TotalPriceBlockStyle>
      <TotalName>Total{isMonthly() ? "(per month)" : "(per year)"}</TotalName>
      <TotalPricestyle>
        +${totalPrice()}/{isMonthly() ? "mo" : "yr"}
      </TotalPricestyle>
    </TotalPriceBlockStyle>
  );
}

export default TotalPrice;
