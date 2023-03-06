import styled from "styled-components";
import Checkbox from "./Checkbox";
import CheckboxContent from "./CheckboxContent";

const CheckboxBlockStyle = styled.button`
  user-select: none;
  background: none;
  display: flex;
  align-items: center;
  padding: 16px 24px 17px;
  border: 1px solid var(--color-Border);
  border-radius: 8px;
  &.active {
    border: 1px solid var(--color-Purple);
    background: var(--color-VeryLightGrey);
  }
  @media ${(props) => props.theme.media.tablet} {
    padding: 11px 5px;
  }
  @media ${(props) => props.theme.media.phone} {
    padding: 11px 16px 12px;
  }
`;

function CheckboxBlock({ name, text, price, onClick, abbreviation, select }) {
  return (
    <CheckboxBlockStyle
      onClick={() => onClick(name)}
      className={select ? "active" : ""}
    >
      <Checkbox name={name} select={select ? true : false} />
      <CheckboxContent
        name={name}
        text={text}
        price={price}
        abbreviation={abbreviation}
      />
    </CheckboxBlockStyle>
  );
}

export default CheckboxBlock;
