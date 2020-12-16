import styled from "styled-components";
import { Text } from "../styles/utils";

const Footer = () => {
  return (
    <FooterHolder>
      <span>Phone : 666 666 666</span>
      <span>email: littleApple@haynaku.com</span>
    </FooterHolder>
  );
};

const FooterHolder = styled.div`
  width: 100%;
  height: 2.5rem;
  background-color: grey;
  display: flex;
  justify-content: space-around;

  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export default Footer;
