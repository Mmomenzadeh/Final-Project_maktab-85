import { Button } from "Components";
import {SlBasket} from "react-icons/sl"
import "../../Assets/Styles/Components/CardProduct/index.scss"

export const CardProduct = ({type , size}) => {
  return (
    <div className={`CardProduct  CardProduct--${type} `}>


      <div className={`CardProduct--${type}__imgContainer`}>
        <img className={`CardProduct--${type}__img`} src="https://dkstatics-public.digikala.com/digikala-products/684623cf7a5978afdb0acca7e76c0d9e2b840c0d_1654602936.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90" alt="" />
      </div>

      <div className={`CardProduct--${type}__dec`}>
        <div className={`CardProduct--${type}__dec__title`}>
          <p className={`CardProduct--${type}__dec__title__name`}>گوشی موبایل سامسونگ A13</p>
          <p className={`CardProduct--${type}__dec__title__model`}>Samsung Galaxy A13</p>
        <div className="line-h"></div>

        </div>
        <div className={`CardProduct--${type}__dec__footer`}>
          <div className={`CardProduct--${type}__dec__footer__price`}>
            <span className={`CardProduct--${type}__dec__footer__price__txt`}>5,125,000</span>
             <span className={`CardProduct--${type}__dec__footer__price__num`}>تومان</span>
             
             </div>
          <Button  type="productCard" size="small">
            <SlBasket/>
            <span>خرید محصول</span>
          </Button>
        </div>
      </div>



    </div>
  );
};
