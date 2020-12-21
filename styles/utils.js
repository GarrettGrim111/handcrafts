import styled, { css } from "styled-components";

export const Wrapper = styled.div`
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

// effort to create only one background container rendered contionally

export const Intro = styled.div`
  ${GeneralPageStyles}

  // not working
  /* background-image:  ${(id) => {
    if ((id = "intro")) return `url("string.jpg")`;
    if ((id = "contact")) return `url("pillow.jpg")`;
  }}; */

  // for one
  /* background-image:  ${({ id }) =>
    (id = "intro" ? `url("string.jpg")` : "red")}; */

  // for all
  background-image: url("images/string.jpg");
`;
export const Product = styled.div`
  ${GeneralPageStyles}
  background-image: url("images/pillow.jpg");
`;
export const Contact = styled.div`
  ${GeneralPageStyles}
`;

export const Holder = styled.div`
  background-color: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-family: "TangerineBold", sans-serif;
`;

export const Subtitle = styled.h4`
  font-size: 25px;
`;

export const Text = styled.div`
  font-size: 20px;
  margin: 10px;
  width: 600px;
`;

export const Picture = styled.div`
  width: 400px;
  height: 500px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 25px;
  box-shadow: 10px 10px 35px 10px rgba(0, 0, 0, 0.75);
  /* background-image: url(images/product/greyOnPink.jpg); */
  background-image: ${({ product }) => {
    if (product === "grey") return "url(images/product/greyOnPink.jpg)";
    if (product === "gold") return "url(images/product/goldOnPink.jpg)";
    if (product === "cream") return "url(images/product/creamOnPink.jpg)";
    if (product === "brown") return "url(images/product/brownOnPink.jpg)";
    if (product === "black") return "url(images/product/blackOnPink.jpg)";
    if (product === "burgundy") return "url(images/product/burgundyOnPink.jpg)";
  }};
`;

export const Profile = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 25px;
  box-shadow: 10px 10px 35px 10px rgba(0, 0, 0, 0.75);
  background-position: center;
  background-repeat: no-repeat;
  /* background-size: cover; */
  object-fit: cover;
  background-image: url("images/villegas.jpg");
`;
