import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setActiveStepAction } from "../../store/activeStepReducer";
import InputGroup from "./InputGroup";
import StepOneFooter from "./StepOneFooter";
import StepOneHeader from "./StepOneHeader";

const StepOnePageStyle = styled.div`
  display: grid;
  grid-template-rows: 68px 264px 48px;
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
    display: flex;
    flex-direction: column;
    margin-right: 0;
    row-gap: 0;
    margin-top: -60px;
    height: 100%;
  }
`;

function StepOnePage() {
  const dispatch = useDispatch();

  const errorName = useSelector((state) => state.registr.name.error);
  const errorEmail = useSelector((state) => state.registr.email.error);
  const errorPhone = useSelector((state) => state.registr.phone.error);
  const valueName = useSelector((state) => state.registr.name.value);
  const valueEmail = useSelector((state) => state.registr.email.value);
  const valuePhone = useSelector((state) => state.registr.phone.value);

  useEffect(() => {
    dispatch(setActiveStepAction("1"));
  }, [dispatch]);
  return (
    <StepOnePageStyle>
      <StepOneHeader />
      <InputGroup
        errorName={errorName}
        errorEmail={errorEmail}
        errorPhone={errorPhone}
        valueName={valueName}
        valueEmail={valueEmail}
        valuePhone={valuePhone}
      />
      <StepOneFooter
        errorName={errorName}
        errorEmail={errorEmail}
        errorPhone={errorPhone}
        valueName={valueName}
        valueEmail={valueEmail}
        valuePhone={valuePhone}
      />
    </StepOnePageStyle>
  );
}

export default StepOnePage;
