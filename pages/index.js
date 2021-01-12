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
// TODO: solve  responsivity
// TODO: solve product animation (pick the suitable type)

export default function Home({ product }) {
  const [option, setOption] = useState("intro");
  const [image, setImage] = useState("gold");

  let { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>HandCrafts</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap"
          rel="stylesheet"
        />
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
          <Product variants={Stagger}>
            <Holder product>
              <Cover>
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
            <Holder picture>
              <Profile variants={ProfileChange} />
            </Holder>
            <Holder profile>
              <Subtitle variants={TextDrop}>
                {t("common:profileTitle")}
              </Subtitle>
              <Text variants={TextDrop}>{t("common:profileDescription")}</Text>
              <Text variants={TextDrop}>{t("common:profileDescription2")}</Text>
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

// here use hook from translation to check domain suffix and use suitable collection

export async function getStaticProps() {
  let product;

  await firestore
    .collection("products")
    .doc("Tr8Q0ojRHguidi7v6O7R")
    .get()
    .then((doc) => (product = doc.data()));

  // hardcode calling sub-collection product data for translation

  // let de;
  // await firestore
  //   .collection("products")
  //   .doc("Tr8Q0ojRHguidi7v6O7R")
  //   .collection("de")
  //   .doc("de");
  // get().then((doc) => (de = doc.data()));

  return {
    props: {
      product,
      // de,
    },
  };
}
