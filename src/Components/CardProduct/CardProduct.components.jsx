import { Button } from "Components";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../../Assets/Styles/Components/CardProduct/index.scss";

export const CardProduct = ({  size ,product }) => {
  // console.log(product.img[0]);
  return (
    <Link to={`/products/${product.id}`} className={`CardProduct${size} pointer`}>
      <div className={`CardProduct${size}__head`}>
        <img
          className={`CardProduct${size}__head__img`}
          src={`http://localhost:3002/files/${product.img[0]}`}
          alt={product.name}
        />
      </div>
      <div className={`CardProduct${size}__body`}>
        <span className={`CardProduct${size}__body__txt`}>{product.model}</span>
        <p className={`CardProduct${size}__body__heading`}>{product.name}</p>
        <div className="line"></div>
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
    </Link>
  );
};
