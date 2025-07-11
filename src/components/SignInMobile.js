import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import close from "../images/close.svg";
import logo from "../images/Manage-Autism-Logo.svg";

const SignInMobile = () => {
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="navWrapMob">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <Link to="/">
            <div className="menus">
              <img src={close} alt="close" />
            </div>
          </Link>
        </div>
      </div>

      <div className="SignInContainer">
        {/* <div className="signInWrap"> */}
        <form action="" onSubmit={formSubmit} className="signInWrap">
          <h1>Sign In</h1>
          <div className="signInSigngle">
            <p>Email</p>
            <input type="email" placeholder="Anis" />
          </div>
          <div className="signInSigngle second">
            <p>Password</p>
            <input type="password" placeholder="Anis" />
          </div>
          <p>Forgot password?</p>

          <Link to="/profile" className="signInBtn">
            SIGN IN
          </Link>
        </form>
        {/* </div> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #f1f9ff 0% 0% no-repeat padding-box;
  opacity: 1;
  height: 60vh;
  .logo {
    width: 107px;
    height: 33px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .menus {
    width: 28px;
    height: 28px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .navWrapMob {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .SignInContainer {
    width: 100% !important;
    margin: 0 auto !important;
    padding-left: 12px;
    padding-right: 12px;
    overflow: hidden;
    .signInWrap {
      background: #ffffff 0% 0% no-repeat padding-box;
      opacity: 1;
      padding: 40px 17px;
      margin-top: 28px;
      h1 {
        text-align: left;
        font: normal normal bold 30px/34px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
        opacity: 1;
        margin-bottom: 95px;
      }
      p {
        text-align: left;
        font: normal normal normal 12px/24px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
        opacity: 1;
        margin-top: 7px;
      }
      .signInSigngle {
        p {
          text-align: left;
          font: normal normal normal 16px/24px Arial;
          letter-spacing: 0px;
          color: #2699fb;
          opacity: 1;
        }
        input {
          background: #f1f9ff 0% 0% no-repeat padding-box;
          border: 1px solid #f1f9ff;
          opacity: 1;
          border: none;
          outline: none;
          margin-top: 5px;
          width: 100%;
          height: 40px;
          padding: 0 10px;
        }
      }
      .second {
        margin-top: 30px;
      }
      .signInBtn {
        width: 100%;
        height: 39px;
        background: #2699fb 0% 0% no-repeat padding-box;
        border-radius: 20px;
        opacity: 1;
        text-align: center;
        font: normal normal bold 14px/17px Arial;
        letter-spacing: 0px;
        color: #ffffff;
        opacity: 1;
        border: none;
        outline: none;
        margin-top: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: pulse 1.2s ease infinite;
      }
      .signInBtn:hover {
        animation: none;
      }
    }
  }
`;

export default SignInMobile;
