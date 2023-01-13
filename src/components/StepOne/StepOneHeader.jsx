import styled from "styled-components";

const StepOneHeaderStyle = styled.div``;

const StepOneTitleStyle = styled.h1`
  margin-bottom: 11px;
`;

const StepOneTextStyle = styled.p`
  margin-bottom: 35px;
`;

function StepOneHeader() {
  return (
    <StepOneHeaderStyle>
      <StepOneTitleStyle>Personal info</StepOneTitleStyle>
      <StepOneTextStyle>
        Please provide your name, email address, and phone number.
      </StepOneTextStyle>
    </StepOneHeaderStyle>
  );
}

export default StepOneHeader;
