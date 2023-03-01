import { Banner, Button, CardProduct, HeadingTitle, ProductList } from "Components"
import "../../Assets/Styles/Laylout/Main/index.scss"
import { HiOutlineShoppingCart } from "react-icons/hi";

export const Main = () => {
  return (
    <main className="main">
      <Banner/>
    <div>
    <HeadingTitle titleEn="Best Sellers Products" titleFa="محصولات پر فروش"/>
     <ProductList />

    <HeadingTitle titleEn="Products Categories" titleFa="دسته بندی محصولات"/>


    </div>
    </main>
  )
}
