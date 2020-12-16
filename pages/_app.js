import { GlobalStyle } from "../styles/global-styles";
import Footer from "./../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
