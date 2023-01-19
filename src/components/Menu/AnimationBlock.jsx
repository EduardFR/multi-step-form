import styled, { keyframes } from "styled-components";
import { ReactComponent as ellipse } from "../../assets/Ellipse.svg";
import { ReactComponent as circle } from "../../assets/Circle.svg";
import { ReactComponent as transparentEllipse } from "../../assets/transparentEllipse.svg";

const bounce = keyframes`    
        0%{ transform: translate(0px, 0px) rotateX(0deg)  scaleX(1) scaleY(1.25) }
        50%{ transform:  translate(10px, 10px) rotateX(30deg) scaleX(1.5) scaleY(1) }
    100% { transform:  translate(0px, 0px) rotateX(0deg)  scaleX(1) scaleY(1.25)}
`;

const spin = keyframes`   
0%{ transform: translate(0px, 0px) rotateX(0deg)   scaleY(1.25) }
50%{ transform:  translate(10px, 20px) rotateX(30deg)  scaleY(1) }
100% { transform:  translate(0px, 0px) rotateX(0deg)   scaleY(1.25) }
  `;

const lineBounceOne = keyframes`
 0{ transform: translate(0px, 0px) }
 25% { transform: translate(-20px, -10px) rotate(260deg) }
 75% { transform: translate(10px, -10px) rotate(135deg) }
 100% { transform: translate(0px, 0px) rotate(135deg) }
`;
const lineBounceTwo = keyframes`
 0{ transform: translate(0px, 0px) }
 25% { transform: translate(-10px, 10px) rotate(240deg) }
 75% { transform: translate(-10px, -10px) rotate(40deg) }
 100% { transform: translate(0px, 0px) rotate(120deg) }
`;
const lineBounceThree = keyframes`
 0{ transform: translate(0px, 0px) }
 25% { transform: translate(10px, -20px) rotate(160deg) }
 75% { transform: translate(20px, -20px) rotate(300deg) }
 100% { transform: translate(0px, 0px) rotate(40deg) }
`;

const PinkEllipse = styled(ellipse)`
  position: absolute;
  left: 90px;
  top: 155px;
  z-index: 1;
  animation: ${bounce} 8s infinite;
  @media ${(props) => props.theme.media.phone} {
    top: 20px;
    left: 260px;
  }
`;
const OrangeCircle = styled(circle)`
  position: absolute;
  left: -70px;
  top: 120px;
  z-index: 1;
  animation: ${spin} 6s infinite;
  @media ${(props) => props.theme.media.phone} {
    top: 0;
  }
`;

const TransparentEllipse = styled(transparentEllipse)`
  position: absolute;
  left: -60px;
  top: 80px;
  animation: ${bounce} 6s infinite;
  @media ${(props) => props.theme.media.phone} {
    top: -30px;
  }
`;

const WhiteLineOne = styled.div`
  position: absolute;
  background-color: var(--color-White);
  height: 5px;
  width: 20px;
  left: 155px;
  top: 200px;
  border-radius: 10px;
  transform: rotate(135deg);
  animation: ${lineBounceOne} 10s infinite;
  z-index: 2;
  @media ${(props) => props.theme.media.phone} {
    left: 225px;
    top: 115px;
  }
`;
const WhiteLineTwo = styled.div`
  position: absolute;
  background-color: var(--color-White);
  height: 5px;
  width: 22px;
  left: 165px;
  top: 230px;
  border-radius: 10px;
  transform: rotate(120deg);
  animation: ${lineBounceTwo} 10s infinite;
  z-index: 2;
  @media ${(props) => props.theme.media.phone} {
    left: 235px;
    top: 145px;
  }
`;
const WhiteLineThree = styled.div`
  position: absolute;
  background-color: var(--color-White);
  height: 5px;
  width: 22px;
  left: 185px;
  top: 205px;
  border-radius: 10px;
  transform: rotate(40deg);
  animation: ${lineBounceThree} 10s infinite;
  z-index: 2;
  @media ${(props) => props.theme.media.phone} {
    left: 255px;
    top: 120px;
  }
`;

const Block = styled.div`
  overflow: hidden;
  position: relative;
  width: 274px;
  height: 292px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @media ${(props) => props.theme.media.phone} {
    position: absolute;
    border-radius: 0;
    width: 100%;
    height: 170px;
  }
`;

function AnimationBlock() {
  return (
    <Block>
      <PinkEllipse />
      <OrangeCircle />
      <TransparentEllipse />
      <WhiteLineOne />
      <WhiteLineTwo />
      <WhiteLineThree />
    </Block>
  );
}

export default AnimationBlock;
