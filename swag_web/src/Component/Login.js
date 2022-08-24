import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";
import "./login.css";
import Logo from "../Assets/logo3.png";
import Goku from "../Assets/kk.gif";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  if (register.length === 10) {
    console.log("pass must be graterthan 10");
  }

  return (
    <div className="background-img">
      <div class="container">
        <form>
          <img id="goku" src={Goku} alt="gif" />
          <img src={Logo} alt="flipkart logo" id="logo-flip" />
          <div class="titlez">LOGIN</div>
          <div class="input-box underline">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              required
              id="box"
              ref={register("username is required")}
            />
            <div class="underline"></div>
          </div>
          <div class="input-box">
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
              id="box"
              ref={register("password is required")}
            />

            <div class="underline"></div>
          </div>
          <div class="input-box button">
            <Link to={"/home"}>
              <input type="submit" name="" value="Continue" />
            </Link>
          </div>
        </form>
        <div class="option">or Connect With Social Media</div>
        <div class="twitter">
          <a href="https://twitter.com" id="social-media">
            <i class="fab fa-twitter"></i>Sign in With Twitter
          </a>
        </div>
        <div class="facebook">
          <a href="https://www.facebook.com" id="social-media">
            <i class="fab fa-facebook-f"></i>Sign in With Facebook
          </a>
        </div>
        <br />
        <br />
      </div>
      <Outlet />
    </div>
  );
}
export default Login;
