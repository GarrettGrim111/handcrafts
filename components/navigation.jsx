// import { RiRecordCircleFill, RiCheckboxBlankCircleFill } from "react-icons/ri";
import styled from "styled-components";

import { useRouter } from "next/router";
import Link from "next/link";

const Navigation = ({ setOption }) => {
  const pathname = useRouter().asPath;

  return (
    <Holder>
      <Link href="/#intro" passHref>
        <MenuItem
          pathname={pathname}
          name="/#intro"
          onClick={() => setOption("intro")}
        />
      </Link>
      <Link href="/#product" passHref>
        <MenuItem
          pathname={pathname}
          name="/#product"
          onClick={() => setOption("product")}
        />
      </Link>
      <Link href="/#contact" passHref>
        <MenuItem
          pathname={pathname}
          name="/#contact"
          onClick={() => setOption("contact")}
        />
      </Link>
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

const MenuItem = styled.a`
  border-radius: 100%;
  margin: 1rem 0;
  width: 40px;
  height: 40px;
  background-size: 100%;
  background-image: ${({ pathname, name }) =>
    (name === "/#intro" && pathname === "/") || pathname === name
      ? "url(images/blue.png)"
      : "url(images/red.png)"};
`;

export default Navigation;
