import styled from "styled-components";

const InputBlockStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameStyle = styled.p`
  color: var(--color-Denim);
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 8px;
`;

const InputStyle = styled.input`
  border: 1px solid var(--color-Border);
  border-radius: 8px;
  padding: 15px 16px;
  outline: none;
  color: var(--color-Denim);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  &::placeholder {
    color: var(--color-Grey);
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
  }
`;

function Input({ name, type, placeholder }) {
  return (
    <InputBlockStyle>
      <NameStyle>{name}</NameStyle>
      <InputStyle type={type} placeholder={placeholder} />
    </InputBlockStyle>
  );
}

export default Input;
