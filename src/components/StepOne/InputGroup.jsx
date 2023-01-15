import styled from "styled-components";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserEmailAction,
  addUserNameAction,
  addUserPhoneAction,
} from "../../store/registrationReducer";

const InputGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

function InputGroup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const valueName = useSelector((state) => state.registr.valueName);
  const valueEmail = useSelector((state) => state.registr.valueEmail);
  const valuePhone = useSelector((state) => state.registr.valuePhone);

  const onChangeName = (value) => {
    dispatch(addUserNameAction(value));
  };
  const onChangeEmail = (value) => {
    dispatch(addUserEmailAction(value));
  };
  const onChangePhone = (value) => {
    dispatch(addUserPhoneAction(value));
  };

  const goToNextStep = (e) => {
    navigate("/Select-plan");
  };

  return (
    <InputGroupStyle>
      <Input
        name="Name"
        type="text"
        placeholder="e.g. Stephen King"
        value={valueName}
        onChange={onChangeName}
      />
      <Input
        name="Email Address"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        value={valueEmail}
        onChange={onChangeEmail}
      />
      <Input
        name="Phone Number"
        type="tel"
        placeholder="e.g. +1 234 567 890"
        value={valuePhone}
        onChange={onChangePhone}
      />

      <button onClick={goToNextStep}>Validate1</button>
    </InputGroupStyle>
  );
}

export default InputGroup;
