import styled from "styled-components";

const StepThreeHeaderStyle = styled.div``;

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
