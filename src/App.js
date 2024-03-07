import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { ShopCatagory } from "./Pages/ShopCatagory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import ethiopia_banner from "./Components/Assets/banner_ethiopia.jpg";
import arab_banner from "./Components/Assets/banner_arab.jpg";
import indian_banner from "./Components/Assets/banner_indian.jpg";
import nigeria_banner from "./Components/Assets/banner_nigerian.jpg";
import { ShopContext } from "./Context/ShopContext";
import { useContext, useState } from "react";
import NavMobile from "./Components/NavMobile/NavMobile";

// import { ShopCatagory } from './Pages/ShopCatagory';

function App() {
  const { tradition } = useContext(ShopContext);
  const [isopen, setIsOpen] = useState(false);

  const tradition_banner = (nation) => {
    if (nation === "ethiopia") {
      return ethiopia_banner;
    } else if (nation === "indian") {
      return indian_banner;
    } else if (nation === "arab") {
      return arab_banner;
    } else if (nation === "nigeria") {
      return nigeria_banner;
    }
  };

  return (
    <div className={isopen && "fixed-position"}>
      <BrowserRouter>
        {isopen && (
          <NavMobile isopen={isopen} setIsOpen={setIsOpen}></NavMobile>
        )}
        <Navbar isopen={isopen} setIsOpen={setIsOpen} />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCatagory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCatagory banner={women_banner} category="women" />}
          />
          <Route
            path="/Kids"
            element={<ShopCatagory banner={kid_banner} category="kid" />}
          />
          <Route
            path="/traditionals"
            element={
              <ShopCatagory
                banner={tradition_banner(tradition)}
                category={tradition}
                dropdown="yes"
              />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
