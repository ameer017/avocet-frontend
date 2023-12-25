import { Footer, Navbar } from "../components/componentIndex";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;
