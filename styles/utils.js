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

export const WorkPlace1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  min-height: 100vh;
  width: 100%;
  /* margin: 0 auto; */
  max-width: 1900px;

  background-color: blue;

  flex-direction: column;
  position: relative;
`;
export const WorkPlace2 = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;

  max-width: 1900px;

  background-color: green;

  position: relative;
`;
export const WorkPlace3 = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;

  max-width: 1900px;

  background-color: green;

  position: relative;
`;

export const Holder = styled.footer`
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100vh;
`;

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
