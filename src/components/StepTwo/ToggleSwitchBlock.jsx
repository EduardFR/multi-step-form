import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeBillingAction } from "../../store/billingReducer";
import ToggleSwitch from "./ToggleSwitch";

const ToggleSwitchBlockStyle = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--color-VeryLightGrey);
`;

const Monthly = styled.label`
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: var(--color-Grey);
  letter-spacing: 0;
  &.active {
    color: var(--color-Denim);
  }
`;
const Yearly = styled.label`
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: var(--color-Grey);
  letter-spacing: 0;
  &.active {
    color: var(--color-Denim);
  }
`;

function ToggleSwitchBlock({ billing }) {
  const dispatch = useDispatch();

  const onClick = () => {
    if (billing === "Yearly") {
      dispatch(changeBillingAction("Monthly"));
    } else {
      dispatch(changeBillingAction("Yearly"));
    }
  };

  const onChange = (e) => {
    if (e.target.checked) {
      dispatch(changeBillingAction("Yearly"));
    } else {
      dispatch(changeBillingAction("Monthly"));
    }
  };

  return (
    <ToggleSwitchBlockStyle>
      <Monthly
        htmlFor="switch-toggle"
        className={billing === "Monthly" ? "active" : ""}
      >
        Monthly
      </Monthly>
      <ToggleSwitch
        onChange={onChange}
        onClick={onClick}
        checked={billing === "Yearly" ? true : false}
      />
      <Yearly
        htmlFor="switch-toggle"
        className={billing === "Yearly" ? "active" : ""}
      >
        Yearly
      </Yearly>
    </ToggleSwitchBlockStyle>
  );
}

export default ToggleSwitchBlock;
