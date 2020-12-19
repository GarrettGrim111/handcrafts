import styled from "styled-components";
// import { Text } from "styles/utils";

const Footer = () => {
  return (
    <Container>
      <span>Phone : 666 666 666</span>
      <span>email: littleApple@haynaku.com</span>
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  box-shadow: 0px -10px 26px 0px rgba(0,0,0,0.69);
  background: linear-gradient(
    90deg,
    rgba(20, 66, 181, 1) 0%,
    rgba(0, 212, 255, 1) 50%,
    rgba(20, 66, 181, 1) 100%
  );
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  padding: 1rem 0;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export default Footer;
