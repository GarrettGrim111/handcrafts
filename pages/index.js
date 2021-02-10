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
  Cover,
  Box,
} from "styles/utils";

import { Stagger, TextDrop, ProfileChange } from "components/animations.js";

import Navigation from "components/navigation";
import Footer from "components/footer";
import { firestore } from "firebase/utils";

export default function Home({ product }) {
  const [option, setOption] = useState("intro");
  const [image, setImage] = useState("gold");

  let { t } = useTranslation();

  return (
    <>
      <Head>
        <title>HandCrafts</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Wrapper initial="initial" animate="animate">
        <Box>
          <LanguageSwitcher />
          <Navigation option={option} setOption={setOption} />
        </Box>
        {option === "intro" && (
          <Intro id="intro" variants={Stagger}>
            <Holder>
              <Cover>
                <Title variants={TextDrop}>{t("common:mainTitle")}</Title>
                <Subtitle variants={TextDrop}>
                  {t("common:mainSubtitle")}
                </Subtitle>
              </Cover>
            </Holder>
          </Intro>
        )}

        {option === "product" && (
          <Product variants={Stagger}>
            <Holder product>
              <Cover product>
                <Subtitle variants={TextDrop}>
                  {t("common:productTitle")}
                </Subtitle>
                <Text variants={TextDrop}>
                  {t("common:productDescription")}
                </Text>
                <Products variants={ProfileChange}>
                  {product.color.map((color) => (
                    <Item
                      key={color}
                      color={color}
                      onClick={() => setImage(color)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    />
                  ))}
                </Products>

                <Text variants={TextDrop}>
                  <Text>{t("common:material")}</Text>
                  <Text>{t("common:productDetail1")}</Text>
                  <Text>{t("common:productDetail2")}</Text>
                  <Text>{t("common:productDetail3")}</Text>
                  <Text>{t("common:productDetail4")}</Text>
                </Text>
              </Cover>
            </Holder>
            <Holder picture>
              {/* we can keep AnimatePresence here together with animation settings for animation on element leaving DOM
  or keep animation setting in animation folder + varian .... but it takes away possibility of animated leaving */}
              <AnimatePresence>
                <Picture
                  image={image}
                  key={image}
                  initial={{
                    x: 0,
                    y: -80,
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.6 },
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6 },
                  }}
                  exit={{
                    x: 0,
                    y: 80,
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.6 },
                  }}
                />
              </AnimatePresence>
            </Holder>
          </Product>
        )}

        {option === "contact" && (
          <Contact variants={Stagger}>
            <Holder profile>
              <Profile variants={ProfileChange} />
            </Holder>
            <Holder>
              <Cover>
                <Subtitle variants={TextDrop}>
                  {t("common:profileTitle")}
                </Subtitle>
                <Text variants={TextDrop}>
                  {t("common:profileDescription")}
                </Text>
                <Text variants={TextDrop}>
                  {t("common:profileDescription2")}
                </Text>
                <Text variants={TextDrop}>{t("common:subtext")}</Text>
              </Cover>
            </Holder>
            <Footer />
          </Contact>
        )}
      </Wrapper>
    </>
  );
}

export async function getStaticProps() {
  let product;

  await firestore
    .collection("products")
    .doc("Tr8Q0ojRHguidi7v6O7R")
    .get()
    .then((doc) => (product = doc.data()));

  return {
    props: {
      product,
    },
  };
}
