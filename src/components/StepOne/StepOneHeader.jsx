import styled from "styled-components";

const StepOneHeaderStyle = styled.div`
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

const StepOneTitleStyle = styled.h1`
  margin-bottom: 11px;
`;

const StepOneTextStyle = styled.p``;

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
