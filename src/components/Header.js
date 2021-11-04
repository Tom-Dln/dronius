import "../styles/header.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [api, setApi] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      await axios
        .get("http://d7a7-31-32-43-35.ngrok.io/products")
        .then(function (response) {
          console.log(response.data);
          setApi(response.data);
        });
    };
    getProduct();
  }, []);
  return (
    <header className="app-header">
      <div className="app-header-row">
        <Link className="app-header-logo" to="/">
          <svg
            id="Calque_1"
            data-name="Calque 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1744 488.06"
          >
            <defs></defs>
            <text class="cls-1" transform="translate(350.75 397.78)">
              DRONIUS
            </text>
            <line class="cls-2" x1="387" y1="322.55" x2="107" y2="322.55" />
            <line class="cls-2" x1="119.5" y1="328.55" x2="119.5" y2="189.55" />
            <line class="cls-2" y1="189.55" x2="239" y2="189.55" />
            <line
              class="cls-2"
              x1="1357.01"
              y1="322.55"
              x2="1637.01"
              y2="322.55"
            />
            <line
              class="cls-2"
              x1="1624.51"
              y1="328.55"
              x2="1624.51"
              y2="189.55"
            />
            <line class="cls-2" x1="1505" y1="189.55" x2="1744" y2="189.55" />
          </svg>
        </Link>
        <div className="app-header-cart">
          <button class="snipcart-checkout">
            <span class="snipcart-items-count"></span>
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <nav className="app-header-row">
        <Link to="/ListProducts/Drone">Drones</Link>
        <Link to="/ListProducts/Cameras">Caméras</Link>
        <Link to="/ListProducts/Accessoires">Accessoires</Link>
      </nav>
    </header>
  );
};

export default Header;
