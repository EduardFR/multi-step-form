import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ConfirmImage from "./ConfirmImage";
import ConfirmText from "./ConfirmText";
import ConfirmTitle from "./ConfirmTitle";

const StepFivePageStyle = styled.div`
  text-align: center;
  margin-top: 165px;
  margin-right: 84px;
  @media ${(props) => props.theme.media.tablet} {
    margin-right: 0;
  }
  @media ${(props) => props.theme.media.phone} {
    margin-right: 16px;
    margin-left: 16px;
    padding: 49px 24px;
    border-radius: 10px;
    z-index: 10;
    background-color: var(--color-White);
    margin-top: -60px;
  }
`;

function StepFivePage() {
  const navigate = useNavigate();

  const valueName = useSelector((state) => state.registr.name.value);
  const valueEmail = useSelector((state) => state.registr.email.value);
  const valuePhone = useSelector((state) => state.registr.phone.value);

  useEffect(() => {
    if (!valueName || !valueEmail || !valuePhone) {
      navigate("/");
    }
  }, [navigate, valueName, valueEmail, valuePhone]);

  return (
    <StepFivePageStyle>
      <ConfirmImage />
      <ConfirmTitle />
      <ConfirmText />
    </StepFivePageStyle>
  );
}

export default StepFivePage;
