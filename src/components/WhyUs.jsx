import Choose from "./Choose";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentsIcon from '@mui/icons-material/Payments';

function WhyUs() {
  return (
    <>
      <section id="why-us" className="why-section">
        <div className="container">
          <div className="choose-container">
            <div className="choose-container__content-box">
              <div className="choose-container__content">
                <Choose
                  img={<SyncAltIcon />}
                  title="Trade Desk"
                  text="Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform"
                  link="Get Started"
                />
                <Choose
                  img={<AccountBalanceWalletIcon />}
                  title="CoinFlip Wallet"
                  text="Store your growing investments in our
                  non-custodial wallet that gives you access to a full suite of DeFi services in one place"
                  link="Download the App"
                />
                <Choose
                  img={<PaymentsIcon />}
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
