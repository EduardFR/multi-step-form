import styled from "styled-components";
import CheckboxGroup from "./CheckboxGroup";
import StepThreeFooter from "./StepThreeFooter";
import StepThreeHeader from "./StepThreeHeader";

const StepThreePageStyle = styled.div`
  display: grid;
  grid-template-rows: 68px 275px 48px;
  row-gap: 40px;
  text-align: left;
  margin-top: 40px;
  margin-right: 84px;
`;

function StepThreePage() {
  return (
    <StepThreePageStyle>
      <StepThreeHeader />
      <CheckboxGroup />
      <StepThreeFooter />
    </StepThreePageStyle>
  );
}

export default StepThreePage;
