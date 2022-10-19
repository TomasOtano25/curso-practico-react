import { FC } from "react";

import "../styles/OrderItem.scss";

import { Product } from "@/utils/types";
import closeIcon from "@/assets/icons/icon_close.png";

export const OrderItem: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="OrderItem">
      <figure>
        <img
          src={
            product.images[0] ||
            "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
          alt={product.title}
        />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={closeIcon} alt="close" />
    </div>
  );
};
