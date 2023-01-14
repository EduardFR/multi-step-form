import styled from "styled-components";
import TabAvatar from "./TabAvatar";
import TabDescription from "./TabDescription";

const TabStyle = styled.button`
  padding: 20px 16px 16px;
  width: 138px;
  text-align: left;
  border: 1px solid var(--color-Border);
  border-radius: 8px;
  background: none;
  &:hover {
    border: 1px solid var(--color-Purple);
  }
  &.active {
    background-color: var(--color-VeryLightGrey);
  }
`;

function Tab({ name, price, color, active }) {
  return (
    <TabStyle className={active ? "active" : ""}>
      <TabAvatar color={color} />
      <TabDescription name={name} price={price} />
    </TabStyle>
  );
}

export default Tab;
