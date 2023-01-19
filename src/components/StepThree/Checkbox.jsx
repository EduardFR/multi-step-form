import styled from "styled-components";
import { ReactComponent as CheckSVG } from "../../assets/Path.svg";

const CheckboxLabel = styled.label`
  position: relative;
  width: 20px;
  border-radius: 4px;
`;

const CheckboxSpan = styled.span`
  -webkit-user-select: none;
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 4px;
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
  margin-bottom: 1px;
`;

function Checkbox({ onChange, name, select }) {
  return (
    <CheckboxLabel>
      <CheckboxStyle
        id={`addition-checkbox-${name}`}
        type="checkbox"
        value={name}
        checked={select}
        onChange={(e) => onChange(e.target.checked, name)}
      />
      <CheckboxSpan>
        <Check />
      </CheckboxSpan>
    </CheckboxLabel>
  );
}

export default Checkbox;
