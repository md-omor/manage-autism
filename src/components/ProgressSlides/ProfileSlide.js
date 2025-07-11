import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileSlide = () => {
  return (
    <Wrapper>
      <div className="profile_container">
        <div className="profile_goals">
          <div className="goals_left">
            <h1>Goals and Development</h1>
            <div className="userInfoSingle">
              <p>Period of Time</p>
              <select name="" className="minimal">
                <option value="USA">Please Select</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="CANADA">CANADA</option>
                <option value="SPAIN">SPAIN</option>
              </select>
            </div>
          </div>
          <div className="goals_right">
            <button>Edit</button>
            <Link to="/foodlog">
              <button className="daily_log">New Daily Log</button>
            </Link>
          </div>
        </div>
        <div className="profile_slide">
          <h4>Try New Food</h4>
          <ProgressBar
            completed="90"
            bgColor="#2699FB "
            borderRadius="11px"
            baseBgColor="#F1F9FF"
            labelColor="#2699FB"
            className="slid"
          />
        </div>
        <div className="profile_slide">
          <h4>Try New Activities</h4>
          <ProgressBar
            completed="80"
            bgColor="#2699FB "
            borderRadius="11px"
            baseBgColor="#F1F9FF"
            labelColor="#2699FB"
            className="slid"
          />
        </div>
        <div className="profile_slide">
          <h4>New Words</h4>
          <ProgressBar
            completed="25"
            bgColor="#2699FB "
            borderRadius="11px"
            baseBgColor="#F1F9FF"
            labelColor="#2699FB"
            className="slid"
          />
        </div>
        <div className="profile_slide">
          <h4>New Gestures</h4>
          <ProgressBar
            completed="35"
            bgColor="#2699FB "
            borderRadius="11px"
            baseBgColor="#F1F9FF"
            labelColor="#2699FB"
            className="slid"
          />
        </div>
        <div className="profile_slide">
          <h4>Potty Training</h4>
          <ProgressBar
            completed="90"
            bgColor="#2699FB "
            borderRadius="11px"
            baseBgColor="#F1F9FF"
            labelColor="#2699FB"
            className="slid"
          />
        </div>

        <div className="goals_right_btn">
          <button className="btn">Edit</button>

          <Link to="/foodlog">
            <button className="btn btn_hover">New Daily Log</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .slid {
    div {
      width: 1200px;
      max-height: 22px !important;
    }
  }
  .profile_goals {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .goals_left {
      h1 {
        letter-spacing: 0.24px;
        color: #131523;
        opacity: 1;
        font-family: "Poppins", sans-serif;
        margin-bottom: 14px;
      }
    }
  }

  .goals_right {
    button {
      background: #f1f9ff 0% 0% no-repeat padding-box;
      opacity: 1;
      width: 286px;
      height: 39px;
      font: normal normal bold 20px/17px Arial;
      letter-spacing: 0px;
      color: #2699fb;
      opacity: 1;
      display: block;
      border: none;
      border-radius: 20px;
      margin-bottom: 20.57px;
      cursor: pointer;
    }

    .daily_log {
      background: #2699fb 0% 0% no-repeat padding-box;
      border-radius: 20px;
      color: #ffffff;
      opacity: 1;
      width: 286px;
      height: 39px;
      font: normal normal bold 20px/17px Arial;
      letter-spacing: 0px;
      display: block;
      border: none;
      border-radius: 20px;
      margin-bottom: 20.57px;
      cursor: pointer;
      animation: pulse 1.2s ease infinite;
    }
    .daily_log:hover {
      animation: none;
    }
  }

  .profile_slide {
    margin-bottom: 33px;

    h4 {
      text-align: left;
      /* font: normal normal bold 20px/24px; */
      letter-spacing: 0px;
      color: #000000;
      opacity: 1;
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      margin-bottom: 17px;
    }
  }

  .profile_slide:last-child {
    margin-bottom: 0;
  }

  span {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 4px solid #bce0fd;
    font: normal normal bold 21px/24px Arial;
    letter-spacing: 0px;
    color: #409eed;
    border-radius: 50%;
    padding: 0;
    width: 40px;
    height: 40px;
    text-align: center;
  }

  .userInfoSingle {
    margin-bottom: 31.41px;
    p {
      text-align: left;
      font: normal normal normal 20px/24px Arial;
      letter-spacing: 0px;
      color: #2699fb;
      opacity: 1;
      width: 383px;
    }
    select {
      background: #f1f9ff 0% 0% no-repeat padding-box;
      border: 1px solid #f1f9ff;
      opacity: 1;
      padding: 0 14.63px;
      width: 418px;
      height: 34px;
      margin-top: 5px;
      border: none;
      outline: none;
      -webkit-appearance: none;
      font: normal normal normal 16px/24px Arial;
      color: #4f4f4f;

      option {
        background-color: #fff;
        text-align: left;
        font: normal normal normal 16px/24px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
        opacity: 1;
      }
    }

    select.minimal {
      background-image: linear-gradient(45deg, transparent 50%, #2699fb 50%),
        linear-gradient(135deg, #2699fb 50%, transparent 50%);
      background-position: calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
      background-size: 5px 5px, 5px 5px, 1px 1.5em;
      background-repeat: no-repeat;
    }

    select.minimal:focus {
      background-image: linear-gradient(45deg, #2699fb 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, #2699fb 50%),
        linear-gradient(to right, #2699fb, #2699fb);
      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
        calc(100% - 2.5em) 0.5em;
      background-size: 5px 5px, 5px 5px, 1px 1.5em;
      background-repeat: no-repeat;
      outline: 0;
    }

    select:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }
  }

  .goals_right_btn {
    display: none;
  }

  /* responsive code for profile information slider start */

  @media only screen and (max-width: 1024px) and (min-width: 244px) {
    .profile_container {
      width: 100% !important;
      margin: 0 auto !important;
      padding: 29px;
      overflow: hidden;
    }
    .profile_goals {
      display: inline-block !important;
      width: 100%;
    }
    .goals_left {
      h1 {
        margin-bottom: 20px !important;
        width: 188px !important;
        font: normal normal bold 30px/34px Poppins !important;
        letter-spacing: 0px !important;
        color: #4f4f4f !important;
      }
      .userInfoSingle {
        margin-bottom: 44px !important;
        p {
          font: normal normal normal 16px/24px Arial !important;
        }
        select {
          font: normal normal normal 12px/24px Arial !important;
          width: 100% !important;
          option {
            font: normal normal normal 12px/24px Arial !important;
            width: 100% !important;
          }
        }
      }
    }
    .goals_right {
      display: none;
    }
    .slid {
      div {
        width: 100%;
        height: 12px !important;
      }
    }
    span {
      font: normal normal bold 12px/14px Arial !important;
      width: 26px !important;
      height: 26px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
    .profile_slide {
      margin-bottom: 20px !important;

      h4 {
        font: normal normal bold 12px/24px Poppins !important;
        letter-spacing: 0px !important;
        color: #000000 !important;
        margin-bottom: 7px !important;
      }
    }

    .goals_right_btn {
      display: block;
      margin-bottom: 150px;

      .btn {
        background: #f1f9ff 0% 0% no-repeat padding-box;
        opacity: 1;
        width: 100%;
        height: 39px;
        display: block;
        border: none;
        border-radius: 20px;
        margin-top: 22.57px;
        cursor: pointer;
        font: normal normal bold 14px/17px Arial;
        letter-spacing: 0px;
        color: #2699fb;
        text-transform: uppercase;
      }
      .btn_hover {
        animation: pulse 1.2s ease infinite;
      }
      .btn_hover:hover {
        animation: none;
      }

      a:nth-child(2) {
        .btn {
          background: #2699fb 0% 0% no-repeat padding-box !important;
          border-radius: 20px;
          opacity: 1;
          color: #ffffff;
        }
      }
    }
  }
  /* responsive code for profile information slider end */
`;

export default ProfileSlide;
