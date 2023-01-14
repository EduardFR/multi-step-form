import styled from "styled-components";

const AdditionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AdditionName = styled.p`
  font-size: 14px;
  line-height: 20px;
  text-align: left;
`;

const AdditionPrice = styled.p`
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  color: var(--color-Denim);
`;

function Addition({ name, price }) {
  return (
    <AdditionStyle>
      <AdditionName>{name}</AdditionName>
      <AdditionPrice>+${price}/mo</AdditionPrice>
    </AdditionStyle>
  );
}

export default Addition;
