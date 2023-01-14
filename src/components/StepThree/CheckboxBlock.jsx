import styled from "styled-components";
import Checkbox from "./Checkbox";
import CheckboxContent from "./CheckboxContent";

const CheckboxBlockStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px 17.5px;
  border: 1px solid var(--color-Border);
  border-radius: 8px;
`;

function CheckboxBlock({ name, text, price }) {
  return (
    <CheckboxBlockStyle>
      <Checkbox />
      <CheckboxContent name={name} text={text} price={price} />
    </CheckboxBlockStyle>
  );
}

export default CheckboxBlock;
