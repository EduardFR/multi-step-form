import styled from "styled-components";

const CheckboxContentStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CheckboxDescription = styled.div`
  text-align: left;
`;

const CheckboxTitle = styled.h3`
  margin-bottom: 7px;
`;

const CheckboxText = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

const CheckboxPrice = styled.p`
  text-align: right;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-Purple);
`;

function CheckboxContent({ name, text, price }) {
  return (
    <>
      <CheckboxContentStyle>
        <CheckboxDescription>
          <CheckboxTitle>{name}</CheckboxTitle>
          <CheckboxText>{text}</CheckboxText>
        </CheckboxDescription>
        <CheckboxPrice>+{price}/mo</CheckboxPrice>
      </CheckboxContentStyle>
    </>
  );
}

export default CheckboxContent;
