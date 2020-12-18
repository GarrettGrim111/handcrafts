import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 300vh;
  width: 100%;
  margin: 0 auto;
  max-width: 1900px;

  background-color: purple;

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
  background-image: url("string.jpg");
`;
export const Product = styled.div`
  ${GeneralPageStyles}
  background-image: url("pillow.jpg");
`;
export const Contact = styled.div`
  ${GeneralPageStyles}
`;

// export const Title2 = styled(Title)`
// color: green;
// `;

export const Holder = styled.div`
  background-color: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100vh;
`;

// export const Container = styled.div`${Holder}
//  background-color: yellow;
// `;

export const Title = styled.h1`
  font-family: "Tangerine", cursive;
`;

export const Subtitle = styled.h4``;

export const Text = styled.div`
  margin: 10px;
  width: 600px;
`;

export const Picture = styled.div`
  width: 400px;
  height: 150px;
  background-color: purple;

  background-position: center;
  background-repeat: no-repeat;
  /* background-size: cover; */
  object-fit: cover;
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
  background-image: url("villegas.jpg");
`;
