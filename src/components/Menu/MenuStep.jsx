import styled from "styled-components";

const MenuStepStyle = styled.div`
  display: flex;
  column-gap: 16px;
`;

const StepCircleStyle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-White);
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: 1px solid var(--color-White);
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1px;
  &.active {
    color: var(--color-Denim);
    background-color: var(--color-SkyBlue);
    border: 1px solid var(--color-SkyBlue);
  }
`;

const StepContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;

const StepTextStyle = styled.p`
  text-transform: uppercase;
  color: var(--color-LightBlue);
  font-size: 12px;
  line-height: 14px;
`;

const StepTitleStyle = styled.h2`
  text-transform: uppercase;
`;

function MenuStep({ value, title, active }) {
  return (
    <MenuStepStyle>
      <StepCircleStyle className={active ? "active" : ""}>
        {value}
      </StepCircleStyle>
      <StepContentStyle>
        <StepTextStyle> step {value}</StepTextStyle>
        <StepTitleStyle> {title} </StepTitleStyle>
      </StepContentStyle>
    </MenuStepStyle>
  );
}

export default MenuStep;
