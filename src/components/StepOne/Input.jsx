import ReactInputMask from "react-input-mask";
import styled from "styled-components";

const InputBlockStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const NameStyle = styled.p`
  color: var(--color-Denim);
  font-size: 14px;
  line-height: 16px;
`;
const ErrorStyle = styled.h2`
  display: none;
  text-align: right;
  color: var(--color-Red);
  &.active {
    display: block;
  }
`;

const InputStyle = styled(ReactInputMask)`
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
  &.error {
    border: 1px solid var(--color-Red);
  }
`;

function Input({
  name,
  type,
  placeholder,
  onChange,
  value,
  errorValue,
  error,
  pattern,
  mask,
  maskPlaceholder,
}) {
  return (
    <InputBlockStyle>
      <Header>
        <NameStyle>{name}</NameStyle>
        <ErrorStyle className={error ? "active" : ""}>{errorValue}</ErrorStyle>
      </Header>
      <InputStyle
        className={error ? "error" : ""}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        pattern={pattern}
        mask={mask}
        maskPlaceholder={maskPlaceholder}
      />
    </InputBlockStyle>
  );
}

export default Input;
