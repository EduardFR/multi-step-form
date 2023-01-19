import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonGoBack from "../Buttons/ButtonGoBack";
import ButtonNextStep from "../Buttons/ButtonNextStep";

const StepTwoFooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 74px;
  @media ${(props) => props.theme.media.tablet} {
    margin-top: 10px;
  }
  @media ${(props) => props.theme.media.phone} {
    padding: 16px 24px;
    background-color: var(--color-White);
    margin-top: auto;
  }
`;

function StepTwoFooter() {
  const navigate = useNavigate();

  return (
    <StepTwoFooterStyle>
      <ButtonGoBack onClick={() => navigate("/")}>Go Back</ButtonGoBack>
      <ButtonNextStep onClick={() => navigate("/Add-ons")}>
        Next Step
      </ButtonNextStep>
    </StepTwoFooterStyle>
  );
}

export default StepTwoFooter;
