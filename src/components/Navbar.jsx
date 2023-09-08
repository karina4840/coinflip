import { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NavElem from "./NavElem";
import history from "../utils/history";
import LoginBtn from "./LoginBtn";


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

          <Routes history={history}>
            <Route path="/" element={<NavElem />} />
          </Routes> 
          <LoginBtn />
          <span className="hamburger-menu"> 
            <i
              onClick={openMobile}
              className={"fa-solid fa-bars-staggered hamburger-menu"}
            ></i>
          </span>
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
        <i onClick={openMobile} className="fa-solid fa-xmark close-mobile"></i>
        <ul>
          <li onClick={openMobile}>
            <a href="/#buysell">Buy / Sell</a>
          </li>
          <li onClick={openMobile}>
            <a href="#grow">Grow</a>
          </li>
          <li onClick={openMobile}>
            <a href="#why-us">Why Us</a>
          </li>
          <li onClick={openMobile}>
            <a href="#support">Support</a>
          </li>
          <li onClick={openMobile}>
            <LoginBtn />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
