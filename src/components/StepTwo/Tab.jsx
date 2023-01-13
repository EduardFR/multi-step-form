import styled from "styled-components";
import TabAvatar from "./TabAvatar";

const TabStyle = styled.button`
  padding: 20px 69px 16px 16px;
  border: 1px solid var(--color-Border);
  border-radius: 8px;
`;

function Tab({ name, price, color }) {
  return (
    <TabStyle>
      <TabAvatar color={color} />
    </TabStyle>
  );
}

export default Tab;
