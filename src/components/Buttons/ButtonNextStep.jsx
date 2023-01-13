import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled(NavLink)`
  display: inline-block;
  padding: 14px 24px 16px 25px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-decoration: none;
  cursor: pointer;
  color: var(--color-White);
  background-color: var(--color-Denim);
  &:hover {
    background-color: var(--color-HoverButton);
  }
`;

function ButtonNextStep({ step }) {
  return <ButtonStyle to={step}>Next Step</ButtonStyle>;
}

export default ButtonNextStep;
