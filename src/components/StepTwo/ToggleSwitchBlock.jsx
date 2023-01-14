import styled from "styled-components";

const ToggleSwitchBlockStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  border-radius: 8px;
  color: var(--color-Grey);
  background-color: var(--color-VeryLightGrey);
`;

const ToggleSwitchCheckbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + span {
    left: calc(100% - 15px);
  }
`;

const ToggleSwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 38px;
  height: 20px;
  margin: 14px 24px;
  background-color: var(--color-Denim);
  border-radius: 10px;
  position: relative;
`;

const ToggleSwitchButton = styled.span`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 12px;
  height: 12px;
  background-color: var(--color-White);
  border-radius: 50px;
  transition: 0.2s;
`;

function ToggleSwitchBlock() {
  return (
    <ToggleSwitchBlockStyle>
      Monthly
      <ToggleSwitchLabel>
        <ToggleSwitchCheckbox type="checkbox" />
        <ToggleSwitchButton />
      </ToggleSwitchLabel>
      Yearly
    </ToggleSwitchBlockStyle>
  );
}

export default ToggleSwitchBlock;
