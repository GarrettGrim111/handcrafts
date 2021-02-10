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
  width: 100px;
  font-size: 20px;
  /* position: absolute;
  right: 40px;
  top: 40px; */
  background-color: rgba(218, 223, 225, 0.6);
  border-radius: 25px;
  padding: 10px;
/* 
  @media (max-width: 500px) {
    position: absolute;
    right: 5px;
    top: 5px;
  } */
`;

const Language = styled.span`
  text-decoration: none;
`;

export default LanguageSwitcher;
