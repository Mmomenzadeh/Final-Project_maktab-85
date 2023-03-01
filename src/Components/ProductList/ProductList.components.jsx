import { CardProduct } from "Components";
import { Products } from "../../DATA/Products";
import "../../Assets/Styles/Components/ProductList/index.scss"
export const ProductList = () => {
  return (
    <>

      <div className="card-container">
        {Products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
