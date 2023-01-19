import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setActiveStepAction } from "../../store/activeStepReducer";
import CheckboxGroup from "./CheckboxGroup";
import StepThreeFooter from "./StepThreeFooter";
import StepThreeHeader from "./StepThreeHeader";

const StepThreePageStyle = styled.div`
  display: grid;
  grid-template-rows: 68px 275px 48px;
  row-gap: 40px;
  text-align: left;
  margin-top: 40px;
  margin-right: 84px;
  @media ${(props) => props.theme.media.tablet} {
    grid-template-rows: 68px 354px 48px;
    margin-right: 0;
    margin-top: 0;
  }
  @media ${(props) => props.theme.media.phone} {
    grid-template-rows: 128px auto auto;
    margin-right: 0;
    row-gap: 0;
    margin-top: -60px;
    height: 100%;
  }
`;

function StepThreePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const valueName = useSelector((state) => state.registr.name.value);
  const valueEmail = useSelector((state) => state.registr.email.value);
  const valuePhone = useSelector((state) => state.registr.phone.value);

  useEffect(() => {
    dispatch(setActiveStepAction("3"));

    if (!valueName) {
      navigate("/");
    }
    if (!valueEmail) {
      navigate("/");
    }
    if (!valuePhone) {
      navigate("/");
    }
  }, [dispatch, navigate, valueName, valueEmail, valuePhone]);

  return (
    <StepThreePageStyle>
      <StepThreeHeader />
      <CheckboxGroup />
      <StepThreeFooter />
    </StepThreePageStyle>
  );
}

export default StepThreePage;
