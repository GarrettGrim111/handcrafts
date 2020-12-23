// import { RiRecordCircleFill, RiCheckboxBlankCircleFill } from "react-icons/ri";
import styled from "styled-components";

const Navigation = ({ option, setOption }) => {
  return (
    <Holder>
      <MenuItem
        option={option}
        name="intro"
        onClick={() => setOption("intro")}
      />
      <MenuItem
        option={option}
        name="product"
        onClick={() => setOption("product")}
      />
      <MenuItem
        option={option}
        name="contact"
        onClick={() => setOption("contact")}
      />
    </Holder>
  );
};

const Holder = styled.nav`
  display: flex;
  flex-direction: column;
  width: 40px;
  font-size: 30px;
  position: fixed;
  right: 20px;
  top: 15vh;
`;

const MenuItem = styled.span`
  cursor: pointer;
  margin: 1rem 0;
  width: 40px;
  height: 40px;
  background-size: 100%;
  background-image: ${({ option, name }) =>
    option === name ? "url(images/blue.png)" : "url(images/red.png)"};
`;

export default Navigation;
