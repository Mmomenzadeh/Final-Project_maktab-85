import { CategorasMenu } from "Components";
import "../../Assets/Styles/Components/MegaMenu/index.scss";

export const MegaMenu = ({ showMegaMenu, setShowMegaMenu }) => {
  // onMouseOver={()=>setShowMegaMenu(true)}
  // onMouseOut={()=> {
  //   console.log(showMegaMenu);
  //   setShowMegaMenu(false)
  // }  }

  // const trackMouse = (e) => {
  //   e.target.getAttribute("data-id") === " background"
  //     ? setShowMegaMenu(false)
  //     : setShowMegaMenu(true);
  // };

  return (
    <div className="MegaMenu">
      {/* <div
        className="MegaMenu__background"
        data-id="background"
        onMouseEnter={() => setShowMegaMenu(false)}
      ></div> */}
      <div className="MegaMenu__MegaMenuContainer" data-id="MegaMenuContainer">
        <CategorasMenu />
      </div>
    </div>
  );
};
