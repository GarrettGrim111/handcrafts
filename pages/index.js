import Head from "next/head";
import styled from "styled-components";
import {
  Wrapper,
  Intro,
  Holder,
  Title,
  Subtitle,
  Text,
  Picture,
  Product,
  Contact,
  Profile,

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
        <Intro id="intro">
          <Holder>
            <Title>Craft with Story</Title>
            <Subtitle>Hand-maded products</Subtitle>
          </Holder>
          <Navigation />
        </Intro>

        <Product left id="product">
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
        </Product>

        <Contact id="contact">
          <Holder>
            <Profile />
          </Holder>
          <Holder>
            <Subtitle>About me</Subtitle>
            <Text>
              Duis sed erat vel magna viverra lobortis. Morbi dolor ipsum,
              maximus vitae suscipit quis, tempor a purus. Etiam massa nulla,
              venenatis in suscipit eget, consectetur id dui. Proin vestibulum
              enim id eros egestas placerat. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Praesent odio urna, faucibus in cursus in, finibus et nisi. Donec
              elit lorem, luctus a sollicitudin a, eleifend et dolor. Nullam sit
              amet lectus a velit blandit rhoncus vel et enim. Etiam convallis
              lectus sit amet odio porta aliquam. Quisque nulla sapien,
              fringilla eget aliquam vitae, faucibus condimentum ligula. Etiam
              semper malesuada arcu, et venenatis mi dictum id. Nulla
              sollicitudin, urna eu interdum vulputate, purus tortor varius
              nunc, sed porttitor turpis lacus sed neque. Morbi sit amet risus
              vel massa facilisis lobortis. Fusce iaculis et nisl id bibendum.
            </Text>
            <Text>If you like my work, contact is bellow.</Text>
          </Holder>
        </Contact>
        <Footer />
      </Wrapper>
    </div>
  );
}

// const Footer = styled.footer``;
// const Footer = styled.footer``;
// const Footer = styled.footer``;
// const Footer = styled.footer``;
