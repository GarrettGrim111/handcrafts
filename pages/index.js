import Head from "next/head";
import styled, { css } from "styled-components";
import { useState } from "react";

// TODO: delete dotenv library (attempt on setting firebase)

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
              <Text>
                Keep you hair in check with this {product.name}, there are
                following color variations: (click to choose a color!)
                <Products>
                  {product.color.map((color) => (
                    <Item
                      key={color}
                      color={color}
                      onClick={() => setImage(color)}
                    >
                      {color}
                    </Item>
                  ))}

                  {/* @TODO: USELESS: you can remvoe this
                   <Item onClick={() => setImage("grey")}>Grey</Item>
                  <Item onClick={() => setImage("gold")}>Gold</Item>
                  <Item onClick={() => setImage("burgundy")}>Burgundy</Item>
                  <Item color="black" onClick={() => setImage("black")}>
                    Black
                  </Item>
                  <Item color="cream" onClick={() => setImage("cream")}>
                    Cream
                  </Item>
                  <Item onClick={() => setImage("brown")}>Brown</Item> */}
                </Products>
                and it is made of silk.
              </Text>
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
const Products = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 120px;
  text-align: center;
`;

const GeneralProductStyles = css`
  margin: 10px;
  padding: 5px;
  cursor: pointer;
  border: 1px solid black;
`;

// @TODO: Finish color matching
const Item = styled.span`
  ${GeneralProductStyles}
  color: ${({ color }) => {
    if (color === "gold") return "gold";
    if (color === "black") return "#000";
    if (color === "black") return "#000";
    return "grey";
  }};
`;

// @TODO: USELESS - you can remove this
// const Gold = styled.span`
//   ${GeneralProductStyles}
//   color: gold;
// `;
// const Burgundy = styled.span`
//   color: #800020;
//   ${GeneralProductStyles}
// `;

// const Black = styled.span`
//   color: black;
//   ${GeneralProductStyles}
// `;
// const Cream = styled.span`
//   color: #fffdd0;
//   ${GeneralProductStyles}
// `;
// const Brown = styled.span`
//   color: brown;
//   ${GeneralProductStyles}
// `;
// const Grey = styled.span`
//   color: grey;
//   ${GeneralProductStyles}
// `;
