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

  background-color: grey;
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
