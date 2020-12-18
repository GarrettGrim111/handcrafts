import Head from "next/head";
import styled from "styled-components";
import {
  Wrapper,
  WorkPlace,
  Holder,
  Title,
  Subtitle,
  Text,
  Picture,
  // Container,
} from "styles/utils";
import Navigation from "components/navigation";
import Footer from "components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HandCrafts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <WorkPlace id="intro">
          <Holder>
            <Title>Craft with Story</Title>
            <Subtitle>Hand-maded products</Subtitle>
          </Holder>
          <Navigation />
        </WorkPlace>

        <WorkPlace left id="product">
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
        </WorkPlace>

        <WorkPlace id="contact">
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
        </WorkPlace>
        <Footer />
      </Wrapper>
    </div>
  );
}

// const Footer = styled.footer``;
// const Footer = styled.footer``;
// const Footer = styled.footer``;
// const Footer = styled.footer``;
