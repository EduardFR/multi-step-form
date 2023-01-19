import styled from "styled-components";

const AdditionStyle = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  &.active {
    display: flex;
  }
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

function Addition({ name, price, select, abbreviation }) {
  return (
    <AdditionStyle className={select ? "active" : ""}>
      <AdditionName>{name}</AdditionName>
      <AdditionPrice>
        +${price}/{abbreviation}
      </AdditionPrice>
    </AdditionStyle>
  );
}

export default Addition;
