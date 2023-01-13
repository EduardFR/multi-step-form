import styled from "styled-components";
import Tab from "./Tab";

const TabBarStyle = styled.div`
  display: flex;
  column-gap: 18px;
`;

function TabBar() {
  return (
    <TabBarStyle>
      <Tab name="Arcade" price={9} color={"var(--color-Orange)"} active />
      <Tab name="Advanced" price={12} color={"var(--color-Pink)"} />
      <Tab name="Pro" price={15} color={"var(--color-Purple)"} />
    </TabBarStyle>
  );
}

export default TabBar;
