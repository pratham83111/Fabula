"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import Menus from "./component/menus";
import logo from "@/assets/dashboard/images/logo_01.png";
import useSticky from "@/hooks/use-sticky";
import LoginModal from "@/app/components/common/popup/login-modal";

const HeaderFour = () => {
  const { sticky } = useSticky();
  const [forgetPasswordPageOpen, setForgetPasswordPageOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const abcd =
    typeof window !== "undefined" ? localStorage.getItem("islogin") : null;
  const loginData = abcd ? JSON.parse(abcd) : null;


  useEffect(() => {
    const loginData = typeof window !== "undefined" ? localStorage.getItem("islogin") : null;
    if (loginData) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleLogin = () => {
    if (isLoggedIn) {
      localStorage.removeItem("islogin");
      setIsLoggedIn(false);
    } else {
      // Assuming some login logic here
      localStorage.setItem("islogin", JSON.stringify(true));
      setIsLoggedIn(true);
    }
    window.location.reload();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <header
        className={`theme-main-menu menu-overlay sticky-menu ${
          sticky ? "fixed" : ""
        }`}
      >
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  <Image
                    src={logo}
                    alt="logo"
                    height={70}
                    width={100}
                    priority
                  />
                </Link>
              </div>
              <div className="right-widget ms-auto ms-lg-0 order-lg-2">
                <ul className="d-flex align-items-center style-none">
                <li className="d-none d-md-block">
                    {isLoggedIn ? (
                      <a
                        href="/"
                        className="login-btn-one"
                        onClick={toggleLogin}
                      >
                        Logout
                      </a>
                    ) : (
                      <a
                        href="#"
                        className="login-btn-one"
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                      >
                        Login
                      </a>
                    )}
                  </li>
                  <li className="d-none d-md-block ms-4">
                    <Link href="/register" className="btn-five">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 ms-3 ms-lg-0 order-lg-1">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="d-block d-lg-none">
                      <div className="logo">
                        <Link href="/" className="d-block">
                          <Image src={logo} alt="logo" priority width="100" />
                        </Link>
                      </div>
                    </li>
                    {!forgetPasswordPageOpen && (
                      <>
                        <Menus />
                      </>
                    )}
                    <li className="d-md-none mt-5">
                      <Link href="/register" className="btn-five w-100">
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

    
      <LoginModal onlogin={toggleLogin} />
     
    </>
  );
};

export default HeaderFour;
