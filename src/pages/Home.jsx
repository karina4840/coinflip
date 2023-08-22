import Footer from "../components/Footer";
import Hero from "../components/Hero";
import GetStarted from "../components/GetStarted";
import CoinUpdates from "../components/CoinUpdates";
import WhyUs from "../components/WhyUs";
import Support from "../components/Support";

function Home() {
  return (
    <>
      <Hero />
      <CoinUpdates />
      <Support />
      <WhyUs />
      <GetStarted />
      <Footer />
    </>
  );
}

export default Home;