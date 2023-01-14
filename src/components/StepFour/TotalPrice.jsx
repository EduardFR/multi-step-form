import styled from "styled-components";

const TotalPriceBlockStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 24px 0;
`;

const TotalName = styled.p`
  font-size: 14px;
  line-height: 20px;
  text-align: left;
`;

const TotalPricestyle = styled.h1`
  font-size: 20px;
  line-height: 20px;
  text-align: right;
  color: var(--color-Purple);
`;

function TotalPrice() {
  return (
    <TotalPriceBlockStyle>
      <TotalName>Total(per month)</TotalName>
      <TotalPricestyle>+$14/mo</TotalPricestyle>
    </TotalPriceBlockStyle>
  );
}

export default TotalPrice;
