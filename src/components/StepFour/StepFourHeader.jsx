import styled from "styled-components";

const StepFourHeaderStyle = styled.div`
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

const StepFourTitleStyle = styled.h1`
  margin-bottom: 11px;
`;

const StepFourTextStyle = styled.p``;

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
