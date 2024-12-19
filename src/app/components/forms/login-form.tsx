"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { Resolver, useForm } from "react-hook-form";
import ErrorMsg from "../common/error-msg";
import icon from "@/assets/images/icon/icon_60.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import {createLoginSlice,creategetByIdRoleSlice} from "../../../redux/Slice/AuthSlice";

import { ACTION_NAVIGATE } from "next/dist/client/components/router-reducer/router-reducer-types";
import { usePathname } from "next/navigation";

type IFormData = {
  email: string;
  password: string;
  
};

const schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const initialFormValues: IFormData = {
  email: "",
  password: "",
 
};

const resolver: Resolver<IFormData> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
          email: {
            type: "required",
            message: "Email is required.",
          },
          password: {
            type: "required",
            message: "Password is required.",
          },
        }
      : {},
  };
};

const LoginForm = ({ onlogin }: any) => {
  const [data , setData] = useState(initialFormValues);
  const [showPass, setShowPass] = useState<boolean>(false);
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const pathname = usePathname();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({ resolver });

  const toggleLogin = () => {
    setIsLoggedIn((prevLoggedIn) => {
      const newLoggedIn = !prevLoggedIn;
      console.log("isLoggedIn:", newLoggedIn);
      return newLoggedIn;
    });
  };

  const loginFun = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  

 
const onSubmit = async() => {
  // e.preventDefault();

const res = await  dispatch(createLoginSlice  (data) as any)
if (res?.payload?.isSuccess) {
  const login =await res?.payload?.data  
  localStorage.setItem('IsLoginData',JSON.stringify(login))

  

    if (login?.role) {
  const roleData = login?.role
  localStorage.setItem('role',JSON.stringify(roleData))

   if (roleData.name === 'Contractor') {
           
    setTimeout(() => {
      window.location.href="/contractor"
    }, 200);
      } else if (roleData.name === 'Company') {
   
    setTimeout(() => {
     window.location.href="/company"
    }, 200);
      }
    }
    else {
      toast.error('Invalid User');
    }
}
else {
  toast.warning('Invalid email or password');
  }
   
};
  useEffect(() => {
    if (loginSuccess) {
      reset(initialFormValues);
    }
  }, [loginSuccess]);

  return (
   
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>Email*</label>
            <input
              type="email"
              placeholder="james@example.com"
              {...register("email", { required: `Email is required!` })}
              name="email"
              onChange={loginFun as any}
              value={data.email as any }
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.email?.message!} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-20">
            <label>Password*</label>
            <input
              type={`${showPass ? "text" : "password"}`}
              placeholder="Enter Password"
              className="pass_log_id"
              {...register("password", { required: `Password is required!` })}
              name="password"
              onChange={loginFun as any}
              value={data.password as any}
            />
            <span
              className="placeholder_icon"
              onClick={() => setShowPass(!showPass)}
            >
              <span className={`passVicon ${showPass ? "eye-slash" : ""}`}>
                <Image src={icon} alt="icon" />   
              </span>
            </span>
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.password?.message!} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Keep me logged in</label>
            </div>
            <a href="/forgetpassword">Forget Password?</a>
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn-eleven fw-500 tran3s d-block mt-20"
          >
            {isLoggedIn ? "Logout" : "Login" }
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
