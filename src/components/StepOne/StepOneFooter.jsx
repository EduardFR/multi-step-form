import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  addErrorEmailAction,
  addErrorNameAction,
  addErrorPhoneAction,
} from "../../store/registrationReducer";
import ButtonNextStep from "../Buttons/ButtonNextStep";

const StepOneFooterStyle = styled.footer`
  margin-top: 50px;
  text-align: right;
  @media ${(props) => props.theme.media.tablet} {
    margin-top: 10px;
  }
  @media ${(props) => props.theme.media.phone} {
    padding: 16px 24px;
    background-color: var(--color-White);
    margin-top: auto;
  }
`;

function StepOneFooter({ valueName, valuePhone, valueEmail }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = () => {
    let requiredName = "";
    let requiredPhone = "";
    let requiredEmail = "";

    if (!valueName) {
      requiredName = "Name is required!";
    }

    if (!valueEmail) {
      requiredEmail = "Email is required!";
    }

    if (valueEmail && !valueEmail.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)) {
      requiredEmail = "Email is invalid!";
    }

    if (!valuePhone) {
      requiredPhone = "Phone is required!";
    }
    if (valuePhone && !valuePhone.match(/^\+\d-\d{3}-\d{3}-\d{3}$/)) {
      requiredPhone = "Phone is invalid!";
    }

    dispatch(addErrorNameAction(requiredName));
    dispatch(addErrorEmailAction(requiredEmail));
    dispatch(addErrorPhoneAction(requiredPhone));

    if (!requiredName && !requiredPhone && !requiredEmail)
      navigate("/select-plan");
  };

  return (
    <StepOneFooterStyle>
      <ButtonNextStep onClick={onClick}>Next Step</ButtonNextStep>
    </StepOneFooterStyle>
  );
}

export default StepOneFooter;
