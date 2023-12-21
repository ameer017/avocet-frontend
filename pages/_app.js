import { Footer } from "../components/componentIndex";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Component {...pageProps} />
    <Footer/>
  </div>
);

export default MyApp;
