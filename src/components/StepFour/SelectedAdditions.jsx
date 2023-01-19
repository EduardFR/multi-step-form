import styled from "styled-components";
import Addition from "./Addition";
import { additions } from "../../constants/additions";

const SelectedAdditionsStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px 24px 24px 24px;
  background-color: var(--color-VeryLightGrey);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

function SelectedAdditions({ billing, selectedAdditions }) {
  const isMonthly = () => {
    return billing === "Monthly";
  };

  return (
    <SelectedAdditionsStyle>
      {additions.map((addition) => (
        <Addition
          key={addition.name}
          name={addition.name}
          price={isMonthly() ? addition.price.monthly : addition.price.yearly}
          select={selectedAdditions.includes(addition.name)}
          abbreviation={
            isMonthly()
              ? addition.abbreviations.monthly
              : addition.abbreviations.yearly
          }
        />
      ))}
    </SelectedAdditionsStyle>
  );
}

export default SelectedAdditions;
