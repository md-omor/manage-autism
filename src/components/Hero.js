import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <div className="userRegHeroWrap">
        <div className="p">
          We help <b>manage</b> and <b>monitor</b> your
          <b> child's healthcare </b> aiding
          <b> industry professionals </b> for the
          <b> best outcome</b>
        </div>

        <div className="userRegBtnWrap">
          <Link to="/signin" className="signBtn">
            <button className="signinBtn">Sign In</button>
          </Link>
          <Link to="/signup" className="signBtn">
            <button className="signupBtn">Sign Up</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .userRegHeroWrap {
    margin-top: 40px;
    .p {
      width: 100%;
      opacity: 1;
      letter-spacing: 0px;
      text-align: left;
      font: normal normal normal 32px/34px Arial;
      color: #4f4f4f;
    }
    b {
      letter-spacing: 0px;
      text-align: left;
      font: normal normal bold 32px/34px Arial;
      color: #000000;
    }
    .userRegBtnWrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 17.57px;
      .signBtn {
        width: 100%;
        height: 100%;
      }
      .signinBtn {
        background: #f1f9ff 0% 0% no-repeat padding-box;
        border-radius: 20px;
        opacity: 1;
        width: 100%;
        height: 39.43px;
        border: none;
        outline: none;
        text-align: center;
        font: normal normal bold 14px/17px Arial;
        letter-spacing: 0px;
        color: #2699fb;
        opacity: 1;
        box-shadow: 0 0 0 0 rgba(#5a99d4, 0.5) !important;
        animation: pulse 1.2s ease infinite;
      }
      .signinBtn:hover {
        animation: none;
      }
      .signupBtn {
        background: #2699fb 0% 0% no-repeat padding-box;
        border-radius: 20px;
        opacity: 1;
        width: 100%;
        height: 39.43px;
        border: none;
        outline: none;
        text-align: center;
        font: normal normal bold 14px/17px Arial;
        letter-spacing: 0px;
        color: #ffffff;
        opacity: 1;
        margin-top: 20.57px;
        box-shadow: 0 0 0 0 rgba(#5a99d4, 0.5) !important;
        animation: pulse 1.2s ease infinite;
      }
      .signupBtn:hover {
        animation: none;
      }
    }
  }
  @media only screen and (max-width: 434px) and (min-width: 390px) {
    .userRegHeroWrap {
      margin-top: 40px;
      .p {
        width: 330px;
        opacity: 1;
        letter-spacing: 0px;
        text-align: left;
        font: normal normal normal 38px/44px Arial;
        color: #4f4f4f;
      }
      b {
        letter-spacing: 0px;
        text-align: left;
        font: normal normal bold 38px/44px Arial;
        color: #000000;
      }
    }
  }
  @media only screen and (max-width: 390px) and (min-width: 365px) {
    .userRegHeroWrap {
      margin-top: 40px;
      .p {
        width: 100%;
        opacity: 1;
        letter-spacing: 0px;
        text-align: left;
        font: normal normal normal 34px/44px Arial;
        color: #4f4f4f;
      }
      b {
        letter-spacing: 0px;
        text-align: left;
        font: normal normal bold 34px/44px Arial;
        color: #000000;
      }
    }
  }
`;

export default Hero;
