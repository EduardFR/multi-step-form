import styled from "styled-components";
import CheckboxBlock from "./CheckboxBlock";

const CheckboxGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 80px;
`;

function CheckboxGroup() {
  return (
    <CheckboxGroupStyle>
      <CheckboxBlock
        name="Online service"
        text="Access to multiplayer games"
        price={1}
      />
      <CheckboxBlock
        name="Larger storage"
        text="Extra 1TB of cloud save"
        price={2}
      />
      <CheckboxBlock
        name="Customizable profile"
        text="Custom theme on your profile"
        price={2}
      />
    </CheckboxGroupStyle>
  );
}

export default CheckboxGroup;
