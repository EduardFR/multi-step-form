import styled from "styled-components";

const ButtonConfirm = styled.button`
  display: inline-block;
  padding: 14px 31.5px 16px 30.5px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  cursor: pointer;
  color: var(--color-White);
  background-color: var(--color-Purple);
  &:hover {
    background-color: var(--color-HoverPurple);
  }
`;

export default ButtonConfirm;
