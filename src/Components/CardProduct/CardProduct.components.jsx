import { Button } from "Components";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";
import "../../Assets/Styles/Components/CardProduct/index.scss";

export const CardProduct = ({  size ,product }) => {
  return (
    <div className={`CardProduct${size}`}>
      <div className={`CardProduct${size}__head`}>
        <img
          className={`CardProduct${size}__head__img`}
          src={`http://localhost:3002/files/${product.img}`}
          alt={product.name}
        />
      </div>
      <div className={`CardProduct${size}__body`}>
        <span className={`CardProduct${size}__body__txt`}>{product.model}</span>
        <p className={`CardProduct${size}__body__heading`}>{product.name}</p>
        <div className="line-h"></div>
      </div>
      <div className={`CardProduct${size}__footer`}>
        <p className={`CardProduct${size}__footer__price`}>
          {" "}
          <span style={{ color: "#EF3A4F" }}>{product.price}</span> تومان
        </p>
        <div className={`CardProduct${size}__footer__btn`}>
          <Button size="small" type="productCard">
            <HiOutlineShoppingCart size="1.5rem" color="white" />
            خرید محصول
          </Button>
        </div>
      </div>
    </div>
  );
};
