import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ButtonGoBack from "../Buttons/ButtonGoBack";
import ButtonNextStep from "../Buttons/ButtonNextStep";

const StepThreeFooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 39px;
  @media ${(props) => props.theme.media.tablet} {
    margin-top: 10px;
  }
  @media ${(props) => props.theme.media.phone} {
    padding: 16px 24px;
    background-color: var(--color-White);
    margin-top: auto;
  }
`;

function StepThreeFooter() {
  const navigate = useNavigate();

  return (
    <StepThreeFooterStyle>
      <ButtonGoBack onClick={() => navigate("/select-plan")}>
        Go Back
      </ButtonGoBack>
      <ButtonNextStep onClick={() => navigate("/summary")}>
        Next Step
      </ButtonNextStep>
    </StepThreeFooterStyle>
  );
}

export default StepThreeFooter;
