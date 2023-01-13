import styled from "styled-components";

const TabAvatarStyle = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 39px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const TabImage = styled.img``;

function TabAvatar({ color }) {
  return (
    <TabAvatarStyle color={color}>
      <TabImage />
    </TabAvatarStyle>
  );
}

export default TabAvatar;
