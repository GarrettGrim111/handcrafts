import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  margin: 0 auto;
  flex-direction: column;
  position: relative;

  @media (max-width: 500px) {
    min-width: 500px;
  }
`;
const GeneralBackgroundStyles = css`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const GeneralPageStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: inherit;
  ${GeneralBackgroundStyles}

  @media (max-width: 500px) {
    width: 500px;
  }
`;

const GeneralFlexStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: inherit;
`;

export const Intro = styled(motion.div)`
  ${GeneralPageStyles}

  background-image: url("images/sewing-blue2.jpg");
`;
export const Product = styled(motion.div)`
  ${GeneralPageStyles}

  background-image: url("images/sewing-pink2.jpg");

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Contact = styled(motion.div)`
  ${GeneralPageStyles}
  background-image: url("images/gray.jpg");

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Holder = styled(motion.div)`
  ${GeneralFlexStyles}

  flex-direction: column;
  height: 920px;
  margin: 0 auto;

  ${({ product }) =>
    product &&
    ` @media (max-width: 1665px) {
    height: 1080px;
    
    
    @media (max-width: 700px) {
    display: flex;
    height: 1080px;
  }
  `}

  ${({ profile }) =>
    profile &&
    ` @media (max-width: 1300px) {
    height: 600px;
    justify-content: unset;
    
    @media (max-width: 700px) {
    display: flex;
    height: 600px;
  }
  `}

  ${({ picture }) =>
    picture &&
    ` @media (max-width: 1300px) {
    height: 450px;
    justify-content: flex-start;
    
  `}
`;

export const Cover = styled(motion.div)`
  ${GeneralFlexStyles}
  background-color: rgba(218, 223, 225, 0.7);
  border-radius: 5px;
  flex-direction: column;
  margin-top: 20px;

  ${({ product }) =>
    product &&
    `@media (max-width: 700px) {
    width: auto;
   
  }
  `}
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 40px;
  top: 40px;
  height: 300px;

  @media (max-width: 1665px) {
    flex-direction: row-reverse;
    right: 15px;
    width: 100%;
    height: 80px;
    padding: 0 30px;
  }
  @media (max-width: 500px) {
    min-width: 500px;
  }
`;

export const Title = styled(motion.h1)`
  font-size: 80px;
  font-family: "Tangerine", cursive;
  font-weight: bolder;
  padding: 10px;
  text-align: center;
`;

export const Subtitle = styled(motion.h4)`
  font-size: 50px;
  margin-top: 15px;
  text-align: center;
  font-family: "Tangerine", cursive;
  padding: 10px;
`;

export const Text = styled(motion.span)`
  ${GeneralFlexStyles}
  flex-direction: column;
  font-size: 20px;
  margin: 10px;
  padding: 5px;
  width: 600px;

  @media (max-width: 700px) {
    width: 450px;
    height: auto;
  }
`;

export const Picture = styled(motion.div)`
  ${GeneralBackgroundStyles}
  width: 350px;
  height: 350px;
  margin-bottom: 50px;
  border-radius: 5px;
  box-shadow: 10px 10px 35px 10px rgba(0, 0, 0, 0.75);
  background-image: ${({ image }) => {
    if (image === "grey") return "url(images/product/greyOnPink.jpg)";
    if (image === "gold") return "url(images/product/goldOnPink.jpg)";
    if (image === "cream") return "url(images/product/creamOnPink.jpg)";
    if (image === "brown") return "url(images/product/brownOnPink.jpg)";
    if (image === "black") return "url(images/product/blackOnPink.jpg)";
    if (image === "burgundy") return "url(images/product/burgundyOnPink.jpg)";
  }};

  @media (max-width: 700px) {
    margin-top: 50px;
  }
`;

export const Profile = styled(motion.div)`
  ${GeneralBackgroundStyles}

  width: 600px;
  height: 400px;
  box-shadow: 10px 10px 35px 10px rgba(0, 0, 0, 0.75);
  background-image: url("images/villegas.jpg");

  @media (max-width: 700px) {
    width: 400px;
  }
`;

export const Products = styled(motion.div)`
  display: flex;
  width: 250px;
  justify-content: space-between;
  background-color: lightgray;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
`;

export const Item = styled(motion.span)`
  padding: 10px;
  cursor: pointer;
  border: 1px solid black;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.75);
  border-radius: 100%;

  background-color: ${({ color }) => {
    if (color === "gold") return "#f1ff33";
    if (color === "black") return "#090202";
    if (color === "burgundy") return "#860c0c";
    if (color === "cream") return "#f8f5f3";
    if (color === "brown") return "#67360e";
    if (color === "grey") return "#574f4f";
    return "lightskyblue";
  }};
`;
