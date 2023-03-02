import { BsInstagram } from "react-icons/bs";
import {AiOutlineTwitter} from "react-icons/ai"
import {TbBrandTelegram} from "react-icons/tb"
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../Assets/Styles/Laylout/Footer/index.scss";
export const Footer = () => {
  return (
    <>
      <div className="line"></div>
      <footer className="footer">
        <div className="footer__link">
          <Link to="" className="footer__link__item">
            <span>درباره ما</span>
          </Link>

          <Link to="" className="footer__link__item">
            <span>قوانین و مقررات</span>
          </Link>

          <Link to="" className="footer__link__item">
            <span>سوالات متدوال</span>
          </Link>

          <div style={{ margin: "0 2rem" }}>
            <img
              className="logo"
              src="https://www.uplooder.net/img/image/98/2c23735ae2a82b660906d12e520ad41c/Marvel-Logo.svg.png"
              alt=""
            />
          </div>

          <Link to="" className="footer__link__item">
            <span>وبلاگ</span>
          </Link>

          <Link to="" className="footer__link__item">
            <span>دعودت به همکاری </span>
          </Link>

          <Link to="" className="footer__link__item">
            <span>تماس با ما </span>
          </Link>
        </div>

        <div className="footer__icons">
         <div  className="footer__icons__social-link">
         <BsInstagram  className="hover"/>
            <AiOutlineTwitter className="hover"/>
            <FaLinkedinIn className="hover"/>
            <TbBrandTelegram className="hover"/>
         </div>
           
        <span style={{fontSize:"0.8rem"}}> مارول دیجست در شبکه های اجتماعی و پیام رسان ها</span>
        </div>
        <div className="footer__copyRight">
        <p style={{display:"block"}}>  کلیه حقوق برای <span style={{color:"#ef3a4f"}}>مارول دیجیست</span> محفوظ می باشد.</p>
        <p style={{display:"block"}}>
          Copyright © 2023 <span style={{color:"#ef3a4f"}}>Marvel Digist</span> Cloud Computing Technology ® , All Rights Reserved.
        </p>
        </div>
      </footer>
    </>
  );
};
