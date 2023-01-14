import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled(NavLink)`
  display: inline-block;
  padding: 14px 31.5px 16px 30.5px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-decoration: none;
  cursor: pointer;
  color: var(--color-White);
  background-color: var(--color-Purple);
  &:hover {
    background-color: var(--color-HoverPurple);
  }
`;

function ButtonConfirm({ confirm }) {
  return <ButtonStyle to={confirm}>Confirm</ButtonStyle>;
}

export default ButtonConfirm;
