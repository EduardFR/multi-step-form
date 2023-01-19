import { useSelector } from "react-redux";
import styled from "styled-components";
import TabBar from "./TabBar";
import ToggleSwitchBlock from "./ToggleSwitchBlock";

const StepTwoBodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  @media ${(props) => props.theme.media.phone} {
    margin-right: 16px;
    margin-left: 16px;
    margin-bottom: 10px;
    padding: 32px 24px;
    border-radius: 10px;
    z-index: 10;
    background-color: var(--color-White);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

function StepTwoBody() {
  const billing = useSelector((state) => state.billing.value);

  return (
    <StepTwoBodyStyle>
      <TabBar billing={billing} />
      <ToggleSwitchBlock billing={billing} />
    </StepTwoBodyStyle>
  );
}

export default StepTwoBody;
