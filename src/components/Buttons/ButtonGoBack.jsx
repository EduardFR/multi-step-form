import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  color: var(--color-Grey);
  &:hover {
    color: var(--color-Denim);
  }
`;

function ButtonGoBack({ back }) {
  return <ButtonStyle to={back}>Go Back</ButtonStyle>;
}

export default ButtonGoBack;
