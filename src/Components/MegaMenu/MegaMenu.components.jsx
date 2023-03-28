import { CategorasMenu } from "Components";
import "../../Assets/Styles/Components/MegaMenu/index.scss";

export const MegaMenu = () => {
  return (
    <div className="MegaMenu">
        <div className="MegaMenu__background"></div>
      <div className="MegaMenu__MegaMenuContainer">
        <CategorasMenu />
      </div>
    </div>
  );
};
