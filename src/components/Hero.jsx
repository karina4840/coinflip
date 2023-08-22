import { useEffect, useState } from "react";

function Hero() {
  // const [data, setData] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false
  `;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error("Error!");
  //       }
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [url]);

  // console.log(data);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content__text">
              <h1>
                We make crypto
                <br /> clear and simple
              </h1>
            </div>
            <div className="hero-content__text_small">
              <h1>
              Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.
              </h1>
            </div>
            <button className="btn-main-big">Get started</button>
            {/* <button className="btn-secondary">Sign in</button> */}

            {/* mobile btn */}
            <a className="mobile-btn-hero" href="#market">
              See Prices <i className="fa-solid fa-angle-down"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
