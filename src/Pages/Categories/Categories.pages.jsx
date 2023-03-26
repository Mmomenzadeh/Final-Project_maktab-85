import { CategorasMenu } from "Components";
import { Footer, Header } from "Layouts";
import "../../Assets/Styles/Pages/Categories/index.scss";
export const Categories = () => {
  return (
    <div className="categoriePage">
      <Header />
      <div className="categoriePage__body">
        <CategorasMenu />
      </div>
      <Footer />
    </div>
  );
};
