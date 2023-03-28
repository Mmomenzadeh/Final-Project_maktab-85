import { CategorasMenu } from "Components";
import "../../Assets/Styles/Components/MegaMenu/index.scss";

export const MegaMenu = ({showMegaMenu, setShowMegaMenu}) => {
  
  // onMouseOver={()=>setShowMegaMenu(true)}
  // onMouseOut={()=> {
  //   console.log(showMegaMenu);
  //   setShowMegaMenu(false)
  // }  }
  
  return (
    <div className="MegaMenu" onMouseMove={(e)=>console.log(e.target)}>
        <div className="MegaMenu__background"></div>
      <div className="MegaMenu__MegaMenuContainer">
        <CategorasMenu />
      </div>
    </div>
  );
};
