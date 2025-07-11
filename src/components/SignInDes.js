import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import close from "../images/close.svg";
import logo from "../images/Manage-Autism-Logo.svg";

const SignIn = () => {
  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <div className="signInDesk">
        <div className="navWrapper">
          <div className="nav_wrap">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="menu">
            <div className="menu_wrap">
              <Link to="/">
                <img src={close} alt="close" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="navContainer">
        <div className="signInWrapper">
          <h1>Sign in</h1>
          <div className="signIn">
            <form className="signIn" onSubmit={formSubmit}>
              <div className="signinForm">
                <div className="signInFormSingle">
                  <p>Email</p>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Anis"
                    name="_replyto"
                  />
                </div>
                <div className="signInFormSingle">
                  <p>Password</p>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Anis"
                    name="_replyto"
                  />
                </div>

                <h5>Forgot password?</h5>
              </div>
              <Link to="/profile" className="signInBtn">
                SIGN IN
              </Link>
            </form>
          </div>
        </div>
        {/* </div> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .navWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    .nav_wrap {
      width: 20%;
      text-align: -webkit-right;
      .logo {
        width: 260px;
        height: 81px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .menu {
      width: 80%;
      .menu_wrap {
        width: 1200px;
        margin: 0 auto;
        justify-content: end;
        display: flex;

        img {
          cursor: pointer;
        }
      }
    }
  }

  .signInBtn {
    background: #f1f9ff 0% 0% no-repeat padding-box;
    border: 3px solid #ffffff;
    border-radius: 20px;
    opacity: 1;
    text-align: center;
    font: normal normal bold 18px/15px Arial;
    letter-spacing: 0px;
    color: #000000;
    padding: 9px 28px;
    cursor: pointer;
  }

  .signInWrapper {
    background: #f1f9ff 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-bottom: 114px;
    height: 537px;
    margin-top: 40px;
    h1 {
      padding: 29px 131px;
      font: normal normal bold 40px/45px Arial;
      letter-spacing: 0px;
      color: #4f4f4f;
      opacity: 1;
    }
  }

  .signIn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .signInBtn {
    font: normal normal bold 14px/17px Arial;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    background: #2699fb 0% 0% no-repeat padding-box;
    border-radius: 20px;
    width: 286px;
    height: 39px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 0 rgba(#5a99d4, 0.5) !important;
    animation: pulse 1.2s ease infinite;
  }

  .signInBtn:hover {
    animation: none;
  }

  .signinForm {
    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 1;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 17px;
    .signInFormSingle {
      margin-top: 22px;
    }

    p {
      font: normal normal normal 24px/24px Arial;
      letter-spacing: 0px;
      color: #2699fb;
      opacity: 1;
      margin-bottom: 4px;
    }
    input {
      text-align: left;
      font: normal normal normal 16px/24px Arial;
      letter-spacing: 0px;
      color: #4f4f4f;
      opacity: 1;
      background: #f1f9ff 0% 0% no-repeat padding-box;
      border: 1px solid #f1f9ff;
      opacity: 1;
      width: 286px;
      height: 40px;
      padding: 12px 10px;
      outline: none;
    }
    h5 {
      font: normal normal normal 16px/24px Arial;
      letter-spacing: 0px;
      color: #4f4f4f;
      opacity: 1;
      margin-top: 7px;
    }
    .password {
      margin-top: 22px;
    }
  }
`;

export default SignIn;
