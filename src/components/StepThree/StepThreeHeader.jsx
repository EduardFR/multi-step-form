import styled from "styled-components";

const StepThreeHeaderStyle = styled.div`
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

const StepThreeTitleStyle = styled.h1`
  margin-bottom: 11px;
`;

const StepThreeTextStyle = styled.p`
  margin-bottom: 35px;
`;

function StepThreeHeader() {
  return (
    <StepThreeHeaderStyle>
      <StepThreeTitleStyle>Pick add-ons</StepThreeTitleStyle>
      <StepThreeTextStyle>
        Add-ons help enhance your gaming experience.
      </StepThreeTextStyle>
    </StepThreeHeaderStyle>
  );
}

export default StepThreeHeader;
