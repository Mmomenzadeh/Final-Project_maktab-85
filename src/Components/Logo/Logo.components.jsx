import { Link } from "react-router-dom";
import "../../Assets/Styles/Components/Logo/index.scss";
import logo from "./logo.png";
export const Logo = () => {
  return (
    <Link to="/">
      <img className="logo" src={logo} />
    </Link>
  );
};
