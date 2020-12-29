import Head from "next/head";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import LanguageSwitcher from "./../components/languageSwitcher";

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
  // PictureChange,
  ProfileChange,
} from "components/animations.js";

import Navigation from "components/navigation";
import Footer from "components/footer";
import { firestore } from "firebase/utils";

// TODO: pulsing animation (scale) for active color-item
// TODO: solve animatation responsivity
// TODO: solve product animation (pick the suitable type)
// TODO: solve  responsivity

export default function Home({ product }) {
  const [option, setOption] = useState("intro");
  const [image, setImage] = useState("gold");

  let { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>HandCrafts</title>
        {/* <link
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
        /> */}
      </Head>

      <Wrapper initial="initial" animate="animate">
        <LanguageSwitcher />

        <Navigation option={option} setOption={setOption} />
        {option === "intro" && (
          <Intro id="intro" variants={Stagger}>
            <Holder>
              <Title variants={TextDrop}>{t("common:mainTitle")}</Title>
              <Subtitle variants={TextDrop}>
                {t("common:mainSubtitle")}
              </Subtitle>
            </Holder>
          </Intro>
        )}

        {option === "product" && (
          <Product left variants={Stagger}>
            <Holder>
              <Subtitle variants={TextDrop}>
                {t("common:productTitle")}
              </Subtitle>
              <Text variants={TextDrop}>{product.description}</Text>
              <Products variants={ProfileChange}>
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
              {/* we can keep AnimatePresence here together with animation settings for animation on element leaving DOM
  or keep animation setting in animation folder + varian .... but it takes away possibility of animated leaving */}
              <AnimatePresence>
                <Picture
                  image={image}
                  key={image}
                  // variants={PictureChange}
                  initial={{ x: 150, y: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -150, y: 40, opacity: 0 }}
                />
              </AnimatePresence>
            </Holder>
          </Product>
        )}

        {option === "contact" && (
          <Contact variants={Stagger}>
            <Holder>
              <Profile variants={ProfileChange} />
            </Holder>
            <Holder>
              <Subtitle variants={TextDrop}>
                {t("common:profileTitle")}
              </Subtitle>
              <Text variants={TextDrop}>{t("common:profileDescription")}</Text>
              <Text variants={TextDrop}>{t("common:subtext")}</Text>
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
