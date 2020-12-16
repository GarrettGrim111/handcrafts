import { RiRecordCircleFill, RiCheckboxBlankCircleFill } from "react-icons/ri";
import styled from "styled-components";

const Router = () => {
  return (
    <Holder>
      <RiRecordCircleFill />
      <RiCheckboxBlankCircleFill />
      <RiCheckboxBlankCircleFill />
    </Holder>
  );
};

const Holder = styled.footer`
  background-color: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  color: maroon;
  width: 40px;
  font-size: 30px;
  position: fixed;
  right: 0;
  top: 45vh;
  margin-right: 20px;
  z-index: 5;
`;

export default Router;
