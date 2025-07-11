import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import styled from "styled-components";

const ProgressSlide = () => {
  return (
    <Wrapper>
      {/* <div className="profile_container">/ */}
      <div className="profile_goals">
        <div className="goals_left">
          <h1>Goals and Development</h1>
          <div className="userInfoSingle location">
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
      </div>
      <div className="profile_slide">
        <h4>Try New Food</h4>
        <ProgressBar
          completed="90"
          bgColor="#2699FB "
          height="22px"
          width="534px"
          borderRadius="11px"
          baseBgColor="#F1F9FF"
          labelColor="#2699FB"
        />
      </div>
      <div className="profile_slide">
        <h4>Try New Activities</h4>
        <ProgressBar
          completed="80"
          bgColor="#2699FB "
          height="22px"
          width="534px"
          borderRadius="11px"
          baseBgColor="#F1F9FF"
          labelColor="#2699FB"
        />
      </div>
      <div className="profile_slide">
        <h4>New Words</h4>
        <ProgressBar
          completed="25"
          bgColor="#2699FB "
          height="22px"
          width="534px"
          borderRadius="11px"
          baseBgColor="#F1F9FF"
          labelColor="#2699FB"
        />
      </div>
      <div className="profile_slide">
        <h4>New Gestures</h4>
        <ProgressBar
          completed="35"
          bgColor="#2699FB "
          height="22px"
          width="534px"
          borderRadius="11px"
          baseBgColor="#F1F9FF"
          labelColor="#2699FB"
        />
      </div>
      <div className="profile_slide">
        <h4>Potty Training</h4>
        <ProgressBar
          completed="90"
          bgColor="#2699FB "
          height="22px"
          width="534px"
          borderRadius="11px"
          baseBgColor="#F1F9FF"
          labelColor="#2699FB"
        />
      </div>
      {/* </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .profile_goals {
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
    button:nth-child(2) {
      background: #2699fb 0% 0% no-repeat padding-box;
      border-radius: 20px;
      opacity: 1;
      color: #ffffff;
    }
  }

  .profile_slide {
    margin-bottom: 33px;

    h4 {
      letter-spacing: 0px;
      color: #000000;
      opacity: 1;
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  .profile_slide:last-child {
    margin-bottom: 10px;
  }

  span {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 4px solid #bce0fd;
    opacity: 1;
    font: normal normal bold 21px/24px Arial;
    letter-spacing: 0px;
    color: #409eed;
    opacity: 1;
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
      font: normal normal normal 20px/24px Poppins;
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
      width: 218px;
      height: 34px;
      margin-top: 5px;
      border: none;
      outline: none;
      -webkit-appearance: none;
      font: normal normal normal 16px/24px Poppins;
      color: #4f4f4f;

      option {
        background-color: #fff;
        text-align: left;
        font: normal normal normal 16px/24px Poppins;
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
`;

export default ProgressSlide;
