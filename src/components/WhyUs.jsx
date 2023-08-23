import Choose from "./Choose";

function WhyUs() {
  return (
    <>
      <section id="why-us" className="why-section">
        <div className="container">
          <div className="choose-container">
            {/* <h2>Why choose us</h2> */}
            <div className="choose-container__content-box">
              <div className="choose-container__content">
                <Choose
                  img="fa-solid fa-arrow-right-arrow-left"
                  title="Trade Desk"
                  text="Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform"
                  link="Get Started"
                />
                <Choose
                  img="fa-solid fa-wallet"
                  title="CoinFlip Wallet"
                  text="Store your growing investments in our
                  non-custodial wallet that gives you access to a full suite of DeFi services in one place"
                  link="Download the App"
                />
                <Choose
                  img="fa-solid fa-money-bills"
                  title="CoinFlip ATMs"
                  text="We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto"
                  link="Find an ATM"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
