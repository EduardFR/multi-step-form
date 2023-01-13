import styled from "styled-components";

const StepTwoHeaderStyle = styled.div``;

const StepTwoTitleStyle = styled.h1`
  margin-bottom: 11px;
`;

const StepTwoTextStyle = styled.p`
  margin-bottom: 35px;
`;

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
