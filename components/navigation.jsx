import { RiRecordCircleFill, RiCheckboxBlankCircleFill } from "react-icons/ri";
import styled from "styled-components";

import { useRouter } from "next/router";
import Link from "next/link";

// import Link from 'next/link'

// export default ({ href, children }) => {
//   const router = useRouter()

//   let className = children.props.className || ''
//   if (router.pathname === href) {
//     className = `${className} selected`
//   }

//   return <Link href={href}>{React.cloneElement(children, { className })}</Link>
// }

const Navigation = () => {
  const pathname = useRouter().asPath;

  return (
    <Holder>
      <Link href="/#intro" passHref>
        <MenuItem pathname={pathname} name="/#intro" />
      </Link>
      <Link href="/#product" passHref>
        <MenuItem pathname={pathname} name="/#product" />
      </Link>
      <Link href="/#contact" passHref>
        <MenuItem pathname={pathname} name="/#contact" />
      </Link>
    </Holder>
  );
};

const Holder = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  color: maroon;
  width: 40px;
  font-size: 30px;
  position: fixed;
  right: 20px;
  top: 15vh;

  z-index: 5;
`;

const MenuItem = styled.a`
  border-radius: 100%;
  margin: 1rem 0;
  width: 20px;
  height: 20px;
  background-color: ${({ pathname, name }) =>
    (name === "/#intro" && pathname === "/") || pathname === name
      ? "black"
      : "red"};
`;

export default Navigation;
