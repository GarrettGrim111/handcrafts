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
  width: 40px;
  font-size: 30px;
  position: fixed;
  right: 20px;
  top: 15vh;
  z-index: 15;
`;

const MenuItem = styled(motion.span)`
  cursor: pointer;
  margin: 1rem 0;
  width: 40px;
  height: 40px;
  background-size: 100%;
  background-image: ${({ option, name }) =>
    option === name ? "url(images/blue.png)" : "url(images/red.png)"};
`;

export default Navigation;
