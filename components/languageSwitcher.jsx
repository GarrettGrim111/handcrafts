import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const LanguageSwitcher = () => {
  let router = useRouter();
  return (
    <Holder>
      {router.locales.map((locale) => (
        <Language key={locale}>
          <Link href={router.asPath} locale={locale}>
            <a>{locale}</a>
          </Link>
        </Language>
      ))}
    </Holder>
  );
};

const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  font-size: 20px;
  position: absolute;
  right: 5vh;
  top: 4vh;
  z-index: 15;

  /* @media (max-width: 1300px) {
    position: absolute;
  } */
`;

const Language = styled.span`
  /* display: flex;
  justify-content: space-between; */
  text-decoration: none;
`;

export default LanguageSwitcher;
