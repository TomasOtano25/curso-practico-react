import menu from "@/assets/icons/icon_menu.svg";
import yardSaleLogo from "@/assets/logos/logo_yard_sale.svg";
import shoppingCardIcon from "@/assets/icons/icon_shopping_cart.svg";

import "@/styles/Header.scss";
import { useContext, useState } from "react";
import { Menu } from "@/components/Menu";
import AppContext from "@/context/AppContext";
import { StateContext } from "@/hooks/useInitialState";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const { state } = useContext<StateContext>(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={yardSaleLogo} alt="logo" className="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={shoppingCardIcon} alt="shopping cart" />
            {state!.cart.length > 0 ? <div>{state!.cart.length}</div> : null}
          </li>
        </ul>
      </div>

      {toggle && <Menu />}
    </nav>
  );
};

export { Header };
