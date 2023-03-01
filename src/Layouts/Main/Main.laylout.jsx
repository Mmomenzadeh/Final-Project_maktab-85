import { Banner, Button, CardProduct } from "Components"
import "../../Assets/Styles/Laylout/Main/index.scss"
import { HiOutlineShoppingCart } from "react-icons/hi";

export const Main = () => {
  return (
    <main className="main">
      <Banner/>
      <CardProduct/>
    </main>
  )
}
