import { Link } from "react-router-dom";

const goTop = () => {
  window.scrollTo({
    top: (0, 0),
    behavior: "smooth",
  });
};

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-content__info">
          <Link to="/">
            <div onClick={goTop} className="footer_logo"></div>
          </Link>
            <p>
              CoinFlip, the world’s leading bitcoin ATM operator, makes it so
              flippin’ easy to buy and sell bitcoin via cash, card, or bank
              transfer.
            </p>
            <p>
              Sign up to get the latest in CoinFlip news, discounts, and more.
            </p>
            <div className="email-wrap">
              <input
                className="email_input"
                type="email"
                name="Email"
                id=""
                placeholder="Email Address"
              />
              <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </div>
            <p>© 2021 GPD Holdings, LLC FinCEN MSB</p>
          </div>
          <div className="footer-content__links">
            <p>Company</p>
            <p>About</p>
            <p>Careers</p>
            <p>Press</p>
            <p>News</p>
          </div>
          <div className="footer-content__policy">
            <p>Privacy Policy and Terms of Service</p>
            <p>CoinFlip Privacy Policy</p>
            <p>CoinFlip Biometrics Privacy Policy</p>
            <p>CoinFlip Financial Privacy Notice</p>
            <p>CoinFlip Terms of Service</p>
            <p>CoinFlip Trade Desk Terms of Service</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
