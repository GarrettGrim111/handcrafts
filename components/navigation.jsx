import styled from "styled-components";
import { motion } from "framer-motion";

const Navigation = ({ option, setOption }) => {
  return (
    // TODO: create one element and map it?

    <Holder>
      <MenuItem
        option={option}
        name="intro"
        onClick={() => setOption("intro")}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
      />
      <MenuItem
        option={option}
        name="product"
        onClick={() => setOption("product")}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
      />
      <MenuItem
        option={option}
        name="contact"
        onClick={() => setOption("contact")}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
      />
    </Holder>
  );
};

const Holder = styled.nav`
  display: flex;
  flex-direction: column;
  width: 55px;
  font-size: 30px;
  position: absolute;
  right: 5vh;
  top: 15vh;
  z-index: 15;
  background-color: rgba(218, 223, 225, 0.6);
  border-radius: 25px;
  align-items: center;

  @media (max-width: 1665px) {
    flex-direction: row;
    justify-content: space-between;
    top: 2vh;
    left: 2vh;
    width: 180px;
    padding: 0 10px;
  }
`;

const MenuItem = styled(motion.span)`
  cursor: pointer;
  margin: 1rem 0;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: ${({ option, name }) =>
    option === name ? "url(images/blue.png)" : "url(images/red.png)"};
`;

export default Navigation;
