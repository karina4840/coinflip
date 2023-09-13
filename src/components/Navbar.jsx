import { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NavElem from "./NavElem";
import history from "../utils/history";
import LoginBtn from "./LoginBtn";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from '@mui/icons-material/Menu';

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
            <i onClick={openMobile}>
              <MenuIcon 
               sx={{
                transition: "color 0.5s",
                color: "#B982FF",
                "&:hover": {
                  color: "#18C8FF",
                },
              }}
              />
            </i>
          </span>
        </div>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
      <span className="close-mobile">
            <i onClick={openMobile}  >
            <CloseIcon 
              sx={{
                transition: "color 0.5s",
                color: "#B982FF",
                "&:hover": {
                  color: "#18C8FF",
                },
              }}
            />
            </i>
          </span>
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
