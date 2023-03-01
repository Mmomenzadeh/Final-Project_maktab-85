import { Button } from "Components";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "../../Assets/Styles/Components/Card-Product/index.scss";
export const CardProduct = ({product}) => {
  return (
    <div className="CardProduct">
      <div className="CardProduct__head">
        <img className="CardProduct__head__img"
          src={product.img}
          alt={product.name}
        />
      </div>
      <div className="CardProduct__body">
        <span className="CardProduct__body__txt">{product.model}</span>
        <p className="CardProduct__body__heading">{product.name}</p>
        <div className="line-w"></div>
      </div>
      <div className="CardProduct__footer">
        <p className="CardProduct__footer__price"> <span style={{color:"#EF3A4F" }}>{product.price}</span> تومان</p>
        <div className="CardProduct__footer__btn">
        <HiOutlineShoppingCart className="footer-btn__icon" />
        <Button size="medium-p" style="btn-p" text="خرید محصول "/>
        </div>
      </div>
    </div>
  );
};
