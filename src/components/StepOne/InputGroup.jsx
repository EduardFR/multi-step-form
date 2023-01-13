import styled from "styled-components";
import Input from "./Input";

const InputGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-bottom: 84px;
`;

function InputGroup() {
  return (
    <InputGroupStyle>
      <Input name="Name" type="text" placeholder="e.g. Stephen King" />
      <Input
        name="Email Address"
        type="email"
        placeholder="e.g. stephenking@lorem.com"
      />
      <Input name="Phone Number" type="tel" placeholder="e.g. +1 234 567 890" />
    </InputGroupStyle>
  );
}

export default InputGroup;
