import { CategorasMenu } from "Components";
import "../../Assets/Styles/Components/MegaMenu/index.scss";

export const MegaMenu = ({ showMegaMenu, setShowMegaMenu }) => {
  // onMouseOver={()=>setShowMegaMenu(true)}
  // onMouseOut={()=> {
  //   console.log(showMegaMenu);
  //   setShowMegaMenu(false)
  // }  }

  const trackMouse = (e) => {
    console.log(e.target.dataset.id);
    console.log(e.target.getAttribute("data-id"));
    if (e.target.dataset.id === "background") {
      setShowMegaMenu(false)
    } else {
      console.log("true");
    }
    // e.target.getAttribute("data-id") === " background"
    //   ? console.log('false')
    //   : console.log('true');
  };

  return (
    <div className="MegaMenu">
      <div
        className="MegaMenu__background"
        data-id="background"
        onMouseEnter={(e) => trackMouse(e)}
      ></div>
      {/* <div style={{height :"65rem"  , zIndex : "12" }}> */}
      <div className="MegaMenu__MegaMenuContainer" data-id="MegaMenuContainer">
        <CategorasMenu />
      </div>
      {/* </div> */}
    </div>
  );
};
