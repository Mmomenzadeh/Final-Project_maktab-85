import { Link } from "react-router-dom";

export const BannerSmall = ({ img, txt, link }) => {
  return (
    <div className="BannerSmall">
      <img className="BannerSmall__img" src={img} alt={link} />
      <Link className="BannerSmall__link">{link}</Link>

      <span className="BannerSmall__txt">{txt}</span>
    </div>
  );
};
