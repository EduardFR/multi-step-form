import styled from "styled-components";
import Check from "../../assets/Check.jpg";

const Image = styled.img`
  block-size: 20%;
  margin-bottom: 32px;
`;

function ConfirmImage() {
  return <Image src={Check}></Image>;
}

export default ConfirmImage;
