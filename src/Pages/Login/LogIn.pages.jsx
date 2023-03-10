import { Button, Input, Logo } from "Components";
import "../../Assets/Styles/Pages/LogIn/index.scss";
import { BsEyeFill } from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import {  AuthService } from "API";


export const LogIn = () => {
   const navigation =  useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    AuthService(data).then(res => {
      localStorage.setItem("token" , JSON.stringify(res.data.accessToken))
      navigation('/managementPanle')
    }).catch(()=>{
      navigation('/home')
    })
  };

  return (
    <div className="flex j-c a-c col full-h">
      <form onSubmit={handleSubmit(onSubmit)} className=" flex col a-c  login">
        <div className="login__header">
          <Logo />
        </div>

        <div className="login__body flex col a-c gap-3  ">
          <input
            className="login-form"
            type="text"
            placeholder="ایمیل خود را وارد نمایید "
            {...register("username", {
              required: true,
              // minLength: 4,
              // pattern:
              //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
                // minLength: 8,
                // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              })}
            />
            <BsEyeFill className="login-icon" />
            {/* <BsEyeSlashFill  className="login-icon"/> */}
          </div>
            {errors.password && (
              <p className="error-form">Please check the pass</p>
            )}

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
            {/* <Link to="/managementPanle" className="login-link"> */}
              <span>ورود به پنل</span>
              <BiLeftArrowAlt className="btn-icon" />
            {/* </Link> */}
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
