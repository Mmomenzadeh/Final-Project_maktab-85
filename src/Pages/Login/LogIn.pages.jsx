import { Button, Input, Logo } from "Components";
import "../../Assets/Styles/Pages/LogIn/index.scss";
import { BsEyeFill } from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex j-c a-c col full-h">
      <form onSubmit={handleSubmit(onSubmit)} className=" flex col a-c  login">
        <div className="login__header">
          <Logo />
        </div>

        <div className="login__body flex col a-c gap-3  ">
          <input
            className="login-form"
            type="email"
            placeholder="ایمیل خود را وارد نمایید "
            {...register("email", {
              required: true,
              minLength: 4,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && <p className="error-form">Please check the email</p>}
          <div className="login__input">
            <input
              className="login-form"
              type="password"
              placeholder="پسورد خود را وارد نمایید"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
            />
            {errors.password && (
              <p className="error-form">Please check the pass</p>
            )}
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
          <Link to="/managementPanle" className="login-link">
            <Button type="login">
              <span>ورود به پنل</span>
              <BiLeftArrowAlt className="btn-icon" />
            </Button>
          </Link>
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
