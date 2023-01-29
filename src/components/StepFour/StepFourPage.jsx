import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setActiveStepAction } from "../../store/activeStepReducer";
import StepFourBody from "./StepFourBody";
import StepFourFooter from "./StepFourFooter";
import StepFourHeader from "./StepFourHeader";

const StepFourPageStyle = styled.div`
  display: grid;
  grid-template-rows: 68px 288px 48px;
  row-gap: 40px;
  text-align: left;
  margin-top: 40px;
  margin-right: 84px;
  @media ${(props) => props.theme.media.tablet} {
    margin-right: 0;
    margin-top: 0;
  }
  @media ${(props) => props.theme.media.phone} {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    row-gap: 0;
    margin-top: -60px;
    height: 100%;
  }
`;

function StepFourPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const valueName = useSelector((state) => state.registr.name.value);
  const valueEmail = useSelector((state) => state.registr.email.value);
  const valuePhone = useSelector((state) => state.registr.phone.value);

  useEffect(() => {
    dispatch(setActiveStepAction("4"));

    if (!valueName || !valueEmail || !valuePhone) {
      navigate("/");
    }
  }, [dispatch, navigate, valueName, valueEmail, valuePhone]);

  return (
    <StepFourPageStyle>
      <StepFourHeader />
      <StepFourBody />
      <StepFourFooter />
    </StepFourPageStyle>
  );
}

export default StepFourPage;
