import styled from "styled-components";

const StepTwoHeaderStyle = styled.div`
  @media ${(props) => props.theme.media.phone} {
    margin-right: 16px;
    margin-left: 16px;
    padding: 32px 24px;
    border-radius: 10px;
    z-index: 10;
    background-color: var(--color-White);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const StepTwoTitleStyle = styled.h1`
  margin-bottom: 11px;
`;

const StepTwoTextStyle = styled.p``;

function StepTwoHeader() {
  return (
    <StepTwoHeaderStyle>
      <StepTwoTitleStyle>Select your plan</StepTwoTitleStyle>
      <StepTwoTextStyle>
        You have the option of monthly or yearly billing.
      </StepTwoTextStyle>
    </StepTwoHeaderStyle>
  );
}

export default StepTwoHeader;
