import styled from "styled-components";

const StepFourHeaderStyle = styled.div``;

const StepFourTitleStyle = styled.h1`
  margin-bottom: 11px;
`;

const StepFourTextStyle = styled.p`
  margin-bottom: 35px;
`;

function StepFourHeader() {
  return (
    <StepFourHeaderStyle>
      <StepFourTitleStyle>Finishing up</StepFourTitleStyle>
      <StepFourTextStyle>
        Double-check everything looks OK before confirming.
      </StepFourTextStyle>
    </StepFourHeaderStyle>
  );
}

export default StepFourHeader;
