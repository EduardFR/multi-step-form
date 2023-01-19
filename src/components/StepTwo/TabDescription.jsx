import styled from "styled-components";

const TabDescriptionStyle = styled.div``;

const TabName = styled.h3`
  margin-bottom: 7px;
`;

const TabPrice = styled.p`
  font-size: 14px;
  line-height: 16px;
`;
const Discount = styled.p`
  display: none;
  margin-top: 6px;
  font-size: 12px;
  line-height: 14px;
  color: var(--color-Denim);
  &.active {
    display: block;
  }
`;

function TabDescription({ name, price, abbreviation, billing }) {
  return (
    <TabDescriptionStyle>
      <TabName>{name}</TabName>
      <TabPrice>
        ${price}/{abbreviation}
      </TabPrice>
      <Discount className={billing}>2 months free</Discount>
    </TabDescriptionStyle>
  );
}

export default TabDescription;
