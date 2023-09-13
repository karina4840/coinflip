import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import "../src/dist/styles.css"
import "../src/styles/styles.css"
import { Route, Routes} from "react-router-dom";
import Coin from "./pages/Coin";
import history from "./utils/history";
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const { error } = useAuth0();
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <>
      <Navbar/>
      <Routes history={history}>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
