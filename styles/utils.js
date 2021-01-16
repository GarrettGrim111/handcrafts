import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  position: relative;
`;

const GeneralPageStyles = css`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: lightblue;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Intro = styled(motion.div)`
  ${GeneralPageStyles}

  background-image: url("images/sewing-blue2.jpg");
`;
export const Product = styled(motion.div)`
  ${GeneralPageStyles}

  background-image: url("images/sewing-pink2.jpg");

  @media (max-width: 1350px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Contact = styled(motion.div)`
  ${GeneralPageStyles}
  background-image: url("images/gray.jpg");

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const Holder = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: inherit;
  height: 100vh;


  ${({ picture }) =>
    picture &&
    ` @media (max-width: 1350px) {
    // width: auto;
    margin-bottom: 12vh;
    height: 400px;
    
    @media (max-width: 700px) {
    display: flex;
    height: 100%;
  }
  `}
`;

export const Cover = styled(motion.div)`
  background-color: rgba(218, 223, 225, 0.7);
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;


  ${({ product }) =>
    product &&
    `@media (max-width: 700px) {
    width: auto;
    margin-top: 15vh;
  }
  `}
`;
export const Title = styled(motion.h1)`
  font-size: 80px;
  font-family: "Tangerine", cursive;
  font-weight: bolder;
  padding: 10px;
`;

export const Subtitle = styled(motion.h4)`
  font-size: 50px;
  margin-top: 15px;
  text-align: center;
  font-family: "Tangerine", cursive;
  padding: 10px;
`;

export const Text = styled(motion.span)`
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 350px;
  height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
    margin-top: 10vh;
  }
`;

export const Profile = styled(motion.div)`
  width: 600px;
  height: 400px;
  box-shadow: 10px 10px 35px 10px rgba(0, 0, 0, 0.75);
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
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
