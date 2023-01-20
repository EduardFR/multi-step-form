import styled from "styled-components";
import Input from "./Input";
import { useDispatch } from "react-redux";
import {
  addValueNameAction,
  addValueEmailAction,
  addValuePhoneAction,
} from "../../store/registrationReducer";

const InputGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  @media ${(props) => props.theme.media.phone} {
    margin-right: 16px;
    margin-left: 16px;
    padding: 32px 24px;
    border-radius: 10px;
    z-index: 10;
    background-color: var(--color-White);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

function InputGroup({
  errorName,
  errorEmail,
  errorPhone,
  valueName,
  valueEmail,
  valuePhone,
}) {
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    dispatch(addValueNameAction(e.target.value));
  };
  const onChangeEmail = (e) => {
    dispatch(addValueEmailAction(e.target.value));
  };
  const onChangePhone = (e) => {
    dispatch(addValuePhoneAction(e.target.value));
  };
  return (
    <InputGroupStyle>
      <Input
        name="Name"
        type="text"
        placeholder="e.g. Stephen King"
        errorValue={errorName}
        error={!valueName && errorName ? true : false}
        value={valueName ? valueName : ""}
        onChange={onChangeName}
      />
      <Input
        name="Email Address"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        errorValue={errorEmail}
        error={(!valueEmail && !!errorEmail) || !!errorEmail ? true : false}
        value={valueEmail ? valueEmail : ""}
        onChange={onChangeEmail}
      />
      <Input
        name="Phone Number"
        type="tel"
        placeholder="e.g. +1-234-567-890"
        errorValue={errorPhone}
        error={(!valuePhone && !!errorPhone) || !!errorPhone ? true : false}
        value={valuePhone ? valuePhone : ""}
        onChange={onChangePhone}
        mask="+1-999-999-999"
        maskPlaceholder="_"
      />
    </InputGroupStyle>
  );
}

export default InputGroup;
