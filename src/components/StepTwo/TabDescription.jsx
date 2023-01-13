import styled from "styled-components";

const TabDescriptionStyle = styled.div``;

const TabName = styled.h3`
  margin-bottom: 7px;
`;

const TabPrice = styled.p`
  font-size: 14px;
  line-height: 16px;
`;

function TabDescription({ name, price }) {
  return (
    <TabDescriptionStyle>
      <TabName>{name}</TabName>
      <TabPrice>${price}/mo</TabPrice>
    </TabDescriptionStyle>
  );
}

export default TabDescription;
