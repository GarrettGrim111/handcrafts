import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// TODO: fix opacity issue for parent element of item
// TODO: fix opacity issue for parent element of item

export const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  max-width: 1900px;
  flex-direction: column;
  position: relative;
`;

const GeneralPageStyles = css`
  display: flex;
  justify-content: ${({ left }) => (left ? "flex-start" : "flex-end")};
  min-height: 100vh;
  width: 100%;
  background-color: lightblue;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Intro = styled(motion.div)`
  ${GeneralPageStyles}
  background-image: url("images/string.jpg");
`;
export const Product = styled(motion.div)`
  ${GeneralPageStyles}

  background-image: url("images/pillow.jpg");
`;
export const Contact = styled(motion.div)`
  ${GeneralPageStyles}
`;

export const Holder = styled(motion.div)`
  background-color: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100vh;
`;

// if i use backup font, then its prerenders and glitches

export const Title = styled(motion.h1)`
  font-size: 60px;
  font-family: "TangerineBold", serif;
`;

export const Subtitle = styled(motion.h4)`
  font-size: 50px;
  font-family: "Tangerine", serif;
`;

export const Text = styled(motion.div)`
  font-size: 20px;
  margin: 10px;
  width: 600px;
`;

export const Picture = styled(motion.div)`
  width: 400px;
  height: 500px;
  /* z-index: 5; */

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 25px;
  box-shadow: 10px 10px 35px 10px rgba(0, 0, 0, 0.75);
  background-image: ${({ image }) => {
    if (image === "grey") return "url(images/product/greyOnPink.jpg)";
    if (image === "gold") return "url(images/product/goldOnPink.jpg)";
    if (image === "cream") return "url(images/product/creamOnPink.jpg)";
    if (image === "brown") return "url(images/product/brownOnPink.jpg)";
    if (image === "black") return "url(images/product/blackOnPink.jpg)";
    if (image === "burgundy") return "url(images/product/burgundyOnPink.jpg)";
  }};
`;

export const Profile = styled(motion.div)`
  width: 600px;
  height: 400px;
  border-radius: 25px;
  box-shadow: 10px 10px 35px 10px rgba(0, 0, 0, 0.75);
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  background-image: url("images/villegas.jpg");
`;

export const Products = styled(motion.div)`
  /* opacity: 0.5; */
  display: flex;
  width: 250px;
  background-color: lightgray;
  justify-content: space-between;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
`;

export const Item = styled(motion.span)`
  /* opacity: 1; */
  padding: 10px;
  cursor: pointer;
  border: 1px solid black;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.75);
  border-radius: 100%;

  background-color: ${({ color }) => {
    if (color === "gold") return "gold";
    if (color === "black") return "#000";
    if (color === "burgundy") return "#800020";
    if (color === "cream") return "#fffdd0";
    if (color === "brown") return "brown";
    if (color === "grey") return "grey";
    return "lightskyblue";
  }};
`;
