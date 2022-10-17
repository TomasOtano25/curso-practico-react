import fechita from "../assets/icons/flechita.svg";
import { OrderItem } from "../components/OrderItem";

import "../styles/Checkout.scss";

export const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <img src={fechita} alt="arrow" />
        <p className="title">My order</p>

        <div className="Checkout-content">
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>

        <OrderItem />
      </div>
    </div>
  );
};
