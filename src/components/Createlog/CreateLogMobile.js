import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import checkList from "../../images/checkList.svg";
import FooterMobile from "../Footers/FooterMobile";
import ProfileNavbarMob from "../Navbars/ProfileNavbarMob";
import ProgressFeedback from "../ProfileFeedback/ProgressFeedback";

const CreateLogMobile = () => {
  return (
    <Wrapper>
      <ProfileNavbarMob />
      <div className="container">
        <div className="message_top_wrap">
          <span>Messages</span>
          <button>Urgent</button>
        </div>
        <textarea
          cols="30"
          rows="10"
          placeholder="Aayan's Situation is getting worse by the day, we cant wait for the long referrals, please arrange to see him soon as possible. Please see attached updated report."
        ></textarea>
        <Link to="/profile">
          <button className="ss">SEND</button>
        </Link>
        <div className="log_img">
          <img src={checkList} alt="checkList" />
        </div>
      </div>
      <ProgressFeedback />
      <FooterMobile />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .message_top_wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font: normal normal bold 24px/28px Arial;
      letter-spacing: 0px;
      color: #4f4f4f;
      opacity: 1;
    }
    button {
      background: #2699fb 0% 0% no-repeat padding-box;
      border-radius: 20px;
      font: normal normal bold 10px/17px Arial;
      letter-spacing: 0px;
      color: #ffffff;
      width: 67px;
      height: 23px;
      border: none;
      outline: none;
    }
  }
  textarea {
    outline: none;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #4f4f4f;
    border-radius: 10px;
    width: 296px;
    height: 263px;
    padding: 20px 35px;
    font: normal normal normal 20px/27px Segoe UI;
    letter-spacing: 0px;
    color: #4f4f4f;
    margin: 26px 0;
  }
  button {
    background: #2699fb 0% 0% no-repeat padding-box;
    border-radius: 20px;
    font: normal normal bold 14px/17px Arial;
    letter-spacing: 0px;
    color: #ffffff;
    width: 286px;
    height: 39px;
    border: none;
    outline: none;
    animation: pulse 1.2s ease infinite;
  }
  button:hover {
    animation: none;
  }
  .log_img {
    width: 100%;
    margin-top: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default CreateLogMobile;
