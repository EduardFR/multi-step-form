import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CheckboxBlock from "./CheckboxBlock";
import { additions } from "../../constants/additions";
import {
  selectedAdditionAction,
  unselectedAdditionAction,
} from "../../store/selectedAdditionsReducer";

const CheckboxGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  @media ${(props) => props.theme.media.phone} {
    margin-right: 16px;
    margin-left: 16px;
    margin-bottom: 10px;
    padding: 0 24px 32px;
    border-radius: 10px;
    z-index: 10;
    background-color: var(--color-White);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

function CheckboxGroup() {
  const dispatch = useDispatch();

  const billing = useSelector((state) => state.billing.value);
  const selectedAdditions = useSelector(
    (state) => state.selectedAdditions.additions
  );
  const isMonthly = () => {
    return billing === "Monthly";
  };

  const onClick = (name) => {
    if (!selectedAdditions.includes(name)) {
      dispatch(selectedAdditionAction(name));
    } else {
      dispatch(unselectedAdditionAction(name));
    }
  };

  return (
    <CheckboxGroupStyle>
      {additions.map((addition) => (
        <CheckboxBlock
          key={addition.name}
          name={addition.name}
          text={addition.text}
          select={selectedAdditions.includes(addition.name)}
          onClick={onClick}
          price={isMonthly() ? addition.price.monthly : addition.price.yearly}
          abbreviation={
            isMonthly()
              ? addition.abbreviations.monthly
              : addition.abbreviations.yearly
          }
        />
      ))}
    </CheckboxGroupStyle>
  );
}

export default CheckboxGroup;
