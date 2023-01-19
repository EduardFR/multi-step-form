import styled from "styled-components";
import TabAvatar from "./TabAvatar";
import TabDescription from "./TabDescription";

const TabStyle = styled.button`
  padding-top: 20px;
  padding-left: 16px;
  padding-bottom: 16px;
  width: 100%;
  text-align: left;
  border: 1px solid var(--color-Border);
  border-radius: 8px;
  background: none;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--color-Purple);
  }
  &.active {
    background-color: var(--color-VeryLightGrey);
    border: 1px solid var(--color-Purple);
  }
  @media ${(props) => props.theme.media.tablet} {
    display: flex;
    padding-top: 14px;
    column-gap: 15px;
  }
  @media ${(props) => props.theme.media.phone} {
    display: flex;
    padding-top: 14px;
    column-gap: 15px;
  }
`;

function Tab({
  name,
  price,
  color,
  activePlan,
  abbreviation,
  onClick,
  src,
  billing,
}) {
  return (
    <TabStyle onClick={onClick} className={name === activePlan ? "active" : ""}>
      <TabAvatar color={color} src={src} />
      <TabDescription
        name={name}
        price={price}
        abbreviation={abbreviation}
        billing={billing}
      />
    </TabStyle>
  );
}

export default Tab;
