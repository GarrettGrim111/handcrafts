import Head from "next/head";
import styled from "styled-components";
import {
  Wrapper,
  WorkPlace1,
  WorkPlace2,
  WorkPlace3,
  Holder,
  Title,
  Subtitle,
  Text,
  Picture,
} from "../styles/utils";
import Router from "./../components/router";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HandCrafts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <WorkPlace1>
          <Holder>
            <Title>Craft with Story</Title>
            <Subtitle>Hand-maded products</Subtitle>
          </Holder>
          <Router />
        </WorkPlace1>
        <WorkPlace2>
          <Holder>
            <Subtitle>Description</Subtitle>
            <Text>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas
            </Text>
            <Text>
              - Modern material <br />- Super Mega Amazing <br /> - Refined
              design
            </Text>
          </Holder>
          <Holder>
            <Picture />
          </Holder>
        </WorkPlace2>

        <WorkPlace3>
          <Holder>
            <Picture />
          </Holder>
          <Holder>
            <Subtitle>About me</Subtitle>
            <Text>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas
            </Text>
            <Text>If you like my work, contact is bellow.</Text>
          </Holder>
        </WorkPlace3>
      </Wrapper>
      <Footer>
        <span>Phone : 666 666 666</span>
        <span>email: littleApple@haynaku.com</span>
      </Footer>
    </div>
  );
}

const Footer = styled.footer`
  background-color: grey;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

// const Footer = styled.footer``;
// const Footer = styled.footer``;
// const Footer = styled.footer``;
// const Footer = styled.footer``;
