import Head from "next/head";
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
  Products,
  Item,
} from "styles/utils";

import {
  Stagger,
  TextDrop,
  PictureChange,
  ProfileChange,
} from "components/animations";

import Navigation from "components/navigation";
import Footer from "components/footer";
import { firestore } from "firebase/utils";

// TODO:
// pulsing animation (scale) for active color-item

export default function Home({ product }) {
  const [option, setOption] = useState("intro");
  const [image, setImage] = useState("gold");

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

      <Wrapper initial="initial" animate="animate">
        <Navigation option={option} setOption={setOption} />
        {option === "intro" && (
          <Intro id="intro" variants={Stagger}>
            <Holder>
              <Title variants={TextDrop}>Craft with Story</Title>
              <Subtitle variants={TextDrop}>Hand-made products</Subtitle>
            </Holder>
          </Intro>
        )}

        {option === "product" && (
          <Product left variants={Stagger}>
            <Holder>
              <Subtitle variants={TextDrop}>Description</Subtitle>
              <Text variants={TextDrop}>{product.description}</Text>
              <Products variants={TextDrop}>
                {product.color.map((color) => (
                  <Item
                    key={color}
                    color={color}
                    onClick={() => setImage(color)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}

                    // pulsing animation (scale) for active color-item

                    // animate={{
                    //   scale: [1, 0.8, 1],
                    // }}
                    // transition={{ repeat: Infinity, duration: 2 }}
                    // style={{opacity:"1"}}
                  />
                ))}
              </Products>

              <Text variants={TextDrop}>
                - Modern material <br />- Super Mega Amazing <br /> - Refined
                design
              </Text>
            </Holder>
            <Holder>
              <Picture image={image} key={image} variants={PictureChange} />
            </Holder>
          </Product>
        )}

        {option === "contact" && (
          <Contact variants={Stagger}>
            <Holder>
              <Profile variants={ProfileChange} />
            </Holder>
            <Holder>
              <Subtitle variants={TextDrop}>About me</Subtitle>
              <Text variants={TextDrop}>
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
              <Text variants={TextDrop}>
                If you like my work, contact is bellow.
              </Text>
            </Holder>
            <Footer
            // initial={{ y: -150, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            />
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
