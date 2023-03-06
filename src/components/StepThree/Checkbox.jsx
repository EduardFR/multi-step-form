import styled from "styled-components";
import { ReactComponent as CheckSVG } from "../../assets/Path.svg";

const CheckboxLabel = styled.label`
  position: relative;
  border-radius: 4px;
  margin-right: 48px;
`;

const CheckboxSpan = styled.span`
  user-select: none;
  position: absolute;
  text-align: center;
  border-radius: 4px;
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-LightGrey);
`;

const CheckboxStyle = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + span {
    background: var(--color-Purple);
    border: 1px solid var(--color-Purple);
  }
`;

const Check = styled(CheckSVG)`
  margin-bottom: -2px;
`;

function Checkbox({ name, select }) {
  return (
    <CheckboxLabel>
      <CheckboxStyle type="checkbox" value={name} checked={select} readOnly />
      <CheckboxSpan>
        <Check />
      </CheckboxSpan>
    </CheckboxLabel>
  );
}

export default Checkbox;
