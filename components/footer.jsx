import styled from "styled-components";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  let { t } = useTranslation();

  return (
    <Container>
      <span> {t("common:phone")} : 666 666 666</span>
      <span>Email: littleApple@haynaku.com</span>
    </Container>
  );
};

const Container = styled(motion.footer)`
  width: 100%;
  box-shadow: 0px -10px 26px 0px rgba(0, 0, 0, 0.39);
  /* background: linear-gradient(
    90deg,
    rgba(20, 66, 181, 1) 0%,
    rgba(0, 212, 255, 1) 50%,
    rgba(20, 66, 181, 1) 100%
  ); */
  background-color: rgba(218, 223, 225, 0.6);
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  padding: 1rem 0;
  font-weight: bold;

  @media (max-width: 800px) {
    /* justify-content: center; */
    flex-wrap: wrap;
  }
`;

export default Footer;
