import styled from "styled-components";
import InputGroup from "./InputGroup";
import StepOneFooter from "./StepOneFooter";
import StepOneHeader from "./StepOneHeader";

const StepOnePageStyle = styled.div`
  display: grid;
  grid-template-rows: 68px 264px 48px;
  row-gap: 40px;
  text-align: left;
  margin-top: 40px;
  margin-right: 84px;
`;

function StepOnePage() {
  return (
    <StepOnePageStyle>
      <StepOneHeader />
      <InputGroup />
      <StepOneFooter />
    </StepOnePageStyle>
  );
}

export default StepOnePage;
