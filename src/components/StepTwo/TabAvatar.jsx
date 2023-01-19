import styled from "styled-components";

const TabAvatarStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-bottom: 39px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  @media ${(props) => props.theme.media.tablet} {
    margin-bottom: 0;
  }
  @media ${(props) => props.theme.media.phone} {
    margin-bottom: 0;
  }
`;

const TabImage = styled.img``;

function TabAvatar({ color, src }) {
  return (
    <TabAvatarStyle color={color}>
      <TabImage src={src} />
    </TabAvatarStyle>
  );
}

export default TabAvatar;
