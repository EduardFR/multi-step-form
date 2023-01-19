import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ButtonGoBack from "../Buttons/ButtonGoBack";
import ButtonConfirm from "../Buttons/ButtonConfirm";

const StepFourFooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 26px;
  @media ${(props) => props.theme.media.tablet} {
    margin-top: 76px;
  }
  @media ${(props) => props.theme.media.phone} {
    padding: 16px 24px;
    background-color: var(--color-White);
    margin-top: auto;
  }
`;

function StepFourFooter() {
  const navigate = useNavigate();

  return (
    <StepFourFooterStyle>
      <ButtonGoBack onClick={() => navigate("/Add-ons")}>Go Back</ButtonGoBack>
      <ButtonConfirm onClick={() => navigate("/confirm")}>
        Confirm
      </ButtonConfirm>
    </StepFourFooterStyle>
  );
}

export default StepFourFooter;
