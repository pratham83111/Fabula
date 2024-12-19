import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import icon from "@/assets/images/icon/icon_60.svg";
import ErrorMsg from "../common/error-msg";
import { useDispatch } from "react-redux";
import { createUserSlice } from "../../../redux/Slice/AuthSlice";
import { ModeId } from "@/utils/utils";
import { toast } from "react-toastify";

const RegisterForm = ({ selectRole }: any) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [userRegister, setUserRegister] = useState<boolean>(false);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    contact_number: Yup.number().required("Phone Number is required"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    Location: Yup.string().required("Address is required"),
  });

  const handleSubmit = (values :any, { setSubmitting, resetForm } :any) => {
    console.log("Form values:", values);
    dispatch(createUserSlice({ ...values, mode: ModeId, role:selectRole }) as any);
    setUserRegister(true);
    localStorage.setItem("userData", JSON.stringify(values));
    toast("Registered successfully!");
    resetForm();
    setSubmitting(false);
  };

  useEffect(() => {
    if (userRegister) {
      // window.location.href = '/';
    }
  }, [userRegister]);

  return (
    <Formik
      initialValues={{
        fullname: "",
        email: "",
        contact_number: "",
        password: "",
        Location: "",
        
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting } : any) => (
        <Form>
          <div className="row">
            <div className="col-12">
              <div className="input-group-meta position-relative mb-25">
                <label>Name*</label>
                <Field type="text" name="fullname" placeholder="James Brower" className="form-control" />
                <ErrorMessage name="fullname"  component="div" className="help-block with-errors text-danger" />
              </div>
            </div>
            <div className="col-12">
              <div className="input-group-meta position-relative mb-25">
                <label>Email*</label>
                <Field type="email" name="email" placeholder="james@example.com" className="form-control" />
                <ErrorMessage name="email" component="div" className="help-block with-errors text-danger" />
              </div>
            </div>
            <div className="col-12">
              <div className="input-group-meta position-relative mb-25">
                <label>Phone Number*</label>
                <Field type="tel" name="contact_number" placeholder="Enter Phone Number" className="form-control" />
                <ErrorMessage name="contact_number" component="div" className="help-block with-errors text-danger" />
              </div>
            </div>
            <div className="col-12">
              <div className="input-group-meta position-relative mb-20">
                <label>Password*</label>
                <Field type={showPass ? "text" : "password"} name="password" placeholder="Enter Password" className="form-control" />
                <span className="placeholder_icon" onClick={() => setShowPass(!showPass)}>
                  <span className={`passVicon ${showPass ? "eye-slash" : ""}`}>
                    <Image src={icon} alt="pass-icon" />
                  </span>
                </span>
                <ErrorMessage name="password" component="div" className="help-block with-errors text-danger" />
              </div>
            </div>
            <div className="bg-white card-box border-20 mt-40 col-12">
              <h4 className="dash-title-three">Address & Location</h4>
              <div className="input-group-meta position-relative mb-25">
                <label>Address*</label>
                <Field type="text" name="Location" placeholder="Enter Your Address" className="form-control" />
                <ErrorMessage name="Location" component="div" className="help-block with-errors text-danger" />
              </div>
            </div>
            <div className="col-12">
              <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                <div>
                  <input type="checkbox" name="remember" />
                  <label htmlFor="remember">
                    By hitting the Register button, you agree to the <a href="#">Terms conditions</a> & <a href="#">Privacy Policy</a>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn-eleven fw-500 tran3s d-block mt-20" disabled={isSubmitting}>
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
