import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const goTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };

  const openMobile = () => {
    setMobile(!mobile);
  };

  return (
    <>
      <nav className={sticky ? "sticky-nav" : ""}>
        <div className="navbar">
          <Link to="/">
            <div onClick={goTop} className="navbar_logo"></div>
          </Link>
          <ul>
            <li>
              <a href="#buysell">Buy / Sell</a>
            </li>
            <li>
              <a href="#grow">Grow</a>
            </li>
            <li>
              <a href="#markets">Markets</a>
            </li>
            <li>
              <a href="#business">Business</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
          <span>
            <button className="btn-secondary">
              <p className="btn-secondary-text">Sign in</p>
            </button>
            <button className="btn-main">Sign up</button>
            {/* mobile */}
            <i
              onClick={openMobile}
              className="fa-solid fa-bars-staggered hamburger-menu"
            ></i>
          </span>
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <i onClick={openMobile} className="fa-solid fa-xmark close-mobile"></i>
        <ul>
          <li onClick={openMobile}>
            <a href="#buysell">Buy / Sell</a>
          </li>
          <li onClick={openMobile}>
            <a href="#grow">Grow</a>
          </li>
          <li onClick={openMobile}>
            <a href="#markets">Markets</a>
          </li>
          <li onClick={openMobile}>
            <a href="#business">Business</a>
          </li>
          <li onClick={openMobile}>
            <a href="#support">Support</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
