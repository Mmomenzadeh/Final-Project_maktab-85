import { CardProduct } from "Components";
import "../../Assets/Styles/Components/ProductsList/index.scss"
export const ProductsList = () => {
  return (
    <div className="ProductsList">
      <CardProduct type="small" />
      <CardProduct type="small" />
      <CardProduct type="small" />
      <CardProduct type="small" />
      <CardProduct type="small" />
    </div>
  );
};
