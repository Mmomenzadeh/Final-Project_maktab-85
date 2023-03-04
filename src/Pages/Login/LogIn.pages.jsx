import { Button, Input, Logo } from "Components";
import "../../Assets/Styles/Pages/LogIn/index.scss";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";
export const LogIn = () => {
  return (
    <div className="flex j-c a-c col full-h">
      <form className=" flex col a-c  login">
        <div className="login__header">
          <Logo />
        </div>

        <div className="login__body flex col a-c gap-3  ">
          <Input
            inpType="login"
            type="email"
            holder="ایمیل خود را وارد نمایید "
          />
          <div className="login__input">
            <Input
              inpType="login"
              type="password"
              holder="پسورد خود را وارد نمایید"
            />
            <BsEyeFill className="login-icon" />
            {/* <BsEyeSlashFill  className="login-icon"/> */}
          </div>
          <div className="login__lable flex j-sb a-c">
            <div className="flex a-c">
              <Input type="checkbox" />
              <p className="fs-1 pointer">مرا به خاطر بسپار</p>
            </div>
            <p className="fs-1 pointer">رمزم را فراموش کرده ام</p>
          </div>
        </div>

        <div className="login__footer flex col a-c gap-2">
          <Button type="login">
            <span>ورود به پنل</span>
            <BiLeftArrowAlt className="btn-icon" />
          </Button>
          <span
            style={{ fontSize: "1rem", color: "#727272", cursor: "pointer" }}
          >
            ثبت نام نکرده ام{" "}
          </span>
        </div>
      </form>
    </div>
  );
};
