import styled from "styled-components";
import Addition from "./Addition";

const SelectedAdditionsStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px 24px 24px 24px;
  background-color: var(--color-VeryLightGrey);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

function SelectedAdditions() {
  return (
    <SelectedAdditionsStyle>
      <Addition name="Online service" price={1} />
      <Addition name="Larger storage" price={2} />
      <Addition name="Customizable profile" price={2} />
    </SelectedAdditionsStyle>
  );
}

export default SelectedAdditions;
