import { Button } from "Components";
import "../../Assets/Styles/Components/Card-Product/index.scss";
export const CardProduct = () => {
  return (
    <div className="CardProduct">
      <div className="CardProduct__head">
        <img className="CardProduct__head__img"
          src="https://pre-websites.ir/elementor/digital/wp-content/uploads/2022/01/product-5.jpg"
          alt=""
        />
      </div>
      <div className="CardProduct__body">
        <span className="CardProduct__body__txt">Modle 360 xbox gaming</span>
        <p className="CardProduct__body__heading">دسته بی سیم ایکس باکس</p>
        <div className="line-w"></div>
      </div>
      <div className="CardProduct__footer">
        <p className="CardProduct__footer__price"> <span style={{color:"#EF3A4F" }}>780,000</span> تومان</p>
        <Button/>
      </div>
    </div>
  );
};
