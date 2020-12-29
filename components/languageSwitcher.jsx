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
  position: fixed;
  right: 20px;
  top: 2vh;
  z-index: 15;
`;

const Language = styled.span`
  /* display: flex;
  justify-content: space-between; */
  text-decoration: none;
`;

export default LanguageSwitcher;
