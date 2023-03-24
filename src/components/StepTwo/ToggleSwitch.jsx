import styled from "styled-components";

const ToggleSwitchCheckbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + button {
    left: calc(100% - 15px);
  }
`;

const ToggleSwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 38px;
  height: 20px;
  margin: 14px 24px;
  background-color: var(--color-Denim);
  border-radius: 10px;
  position: relative;
`;

const ToggleSwitchButton = styled.button`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 12px;
  height: 12px;
  background-color: var(--color-White);
  border: none;
  border-radius: 50px;
  transition: 0.2s;
`;

function ToggleSwitch({ onChange, onClick, checked }) {
  return (
    <ToggleSwitchLabel>
      <ToggleSwitchCheckbox
        id="switch-toggle"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      <ToggleSwitchButton onClick={() => onClick()} />
    </ToggleSwitchLabel>
  );
}

export default ToggleSwitch;
