import styled from "styled-components";

const ButtonNextStep = styled.button`
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
  border: none;
  &:hover {
    background-color: var(--color-HoverButton);
  }
`;

export default ButtonNextStep;
