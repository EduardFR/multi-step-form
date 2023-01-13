import styled from "styled-components";
import TabBar from "./TabBar";
import ToggleSwitchBlock from "./ToggleSwitchBlock";

const StepTwoBodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  margin-bottom: 116px;
`;

function StepTwoBody() {
  return (
    <StepTwoBodyStyle>
      <TabBar />
      <ToggleSwitchBlock />
    </StepTwoBodyStyle>
  );
}

export default StepTwoBody;
