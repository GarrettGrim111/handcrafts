import styled from "styled-components";

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

export const WorkPlace = styled.div`
  display: flex;

  justify-content: ${({ left }) => (left ? "flex-start" : "flex-end")};
  min-height: 100vh;
  width: 100%;
  background-color: blue;
`;



export const Holder = styled.div`
  background-color: pink;
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

export const Title = styled.h1``;

export const Subtitle = styled.h4``;

export const Text = styled.div`
  margin: 10px;
`;

export const Picture = styled.div`
  width: 400px;
  height: 150px;
  background-color: purple;
`;
