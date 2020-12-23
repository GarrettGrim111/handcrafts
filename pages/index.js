import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";

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

} from "styles/utils";
import Navigation from "components/navigation";
import Footer from "components/footer";
import { firestore } from "firebase/utils";

export default function Home({ product }) {
  const [option, setOption] = useState("intro");
  const [image, setImage] = useState("gold");

  console.log(product);
  return (
    <div>
      <Head>
        <title>HandCrafts</title>
        <link
          rel="preload"
          href="fonts/Tangerine-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="fonts/Tangerine-Bold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Wrapper>
        <Navigation option={option} setOption={setOption} />
        {option === "intro" && (
          <Intro id="intro">
            <Holder>
              <Title>Craft with Story</Title>
              <Subtitle>Hand-made products</Subtitle>
            </Holder>
          </Intro>
        )}

        {option === "product" && (
          <Product left>
            <Holder>
              <Subtitle>Description</Subtitle>
              <Text>{product.description}</Text>
              <Products>
                {product.color.map((color) => (
                  <Item
                    key={color}
                    color={color}
                    onClick={() => setImage(color)}
                    // style={{opacity:"1"}}
                  />
                ))}
              </Products>

              <Text>
                - Modern material <br />- Super Mega Amazing <br /> - Refined
                design
              </Text>
            </Holder>
            <Holder>
              <Picture image={image} />
            </Holder>
          </Product>
        )}

        {option === "contact" && (
          <Contact>
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
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Praesent odio urna, faucibus in cursus in, finibus et
                nisi. Donec elit lorem, luctus a sollicitudin a, eleifend et
                dolor. Nullam sit amet lectus a velit blandit rhoncus vel et
                enim. Etiam convallis lectus sit amet odio porta aliquam.
                Quisque nulla sapien, fringilla eget aliquam vitae, faucibus
                condimentum ligula. Etiam semper malesuada arcu, et venenatis mi
                dictum id. Nulla sollicitudin, urna eu interdum vulputate, purus
                tortor varius nunc, sed porttitor turpis lacus sed neque. Morbi
                sit amet risus vel massa facilisis lobortis. Fusce iaculis et
                nisl id bibendum.
              </Text>
              <Text>If you like my work, contact is bellow.</Text>
            </Holder>
            <Footer />
          </Contact>
        )}
      </Wrapper>
    </div>
  );
}

export async function getStaticProps() {
  let product;

  await firestore
    .collection("products")
    .doc("Tr8Q0ojRHguidi7v6O7R")
    .get()
    .then((doc) => (product = doc.data()));

  // By returning { props: data }, the Blog component
  // will receive `data` as a prop at build time
  return {
    props: {
      product,
    },
  };
}

// const Footer = styled.footer``;
// TODO: fix opacity issue for parent element of item
const Products = styled.div`
  display: flex;
  width: 250px;
  background-color: lightgray;
  /* opacity: 0.5; */
  justify-content: space-between;
  border-radius: 25px;
  margin: 15px;
  padding: 10px;
`;

const Item = styled.span`
  /* opacity: 1; */
  padding: 10px;
  cursor: pointer;
  border: 1px solid black;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.75);

  border-radius: 100%;

  background-color: ${({ color }) => {
    if (color === "gold") return "gold";
    if (color === "black") return "#000";
    if (color === "burgundy") return "#800020";
    if (color === "cream") return "#fffdd0";
    if (color === "brown") return "brown";
    if (color === "grey") return "grey";
    return "lightskyblue";
  }};
`;
