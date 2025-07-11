import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import aayandailylog from "../images/aayandailylog.svg";
import close from "../images/close.svg";

const NewDailyLog = () => {
  return (
    <Wrapper>
      <div className="daily_log">
        <div className="navContainer container">
          <Link to="/foodlog">
            <div className="cross">
              <img src={close} alt="close" />
            </div>
          </Link>
        </div>
      </div>

      <div className="daily_log_con container">
        <div className="daily_log_wrap">
          <div className="daily_log_left">
            <h2>Blank Log Sheet</h2>

            <button className="pri_btn">Print</button>

            <button>Download</button>

            <button className="pri_btn">Share</button>
          </div>
          <div className="log_img">
            <h1>Blank Log Sheet</h1>
            <div className="daily_log_right">
              <img src={aayandailylog} alt="aayandailylog" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  .daily_log {
    background: #f1f9ff 0% 0% no-repeat padding-box;
    opacity: 1;
    height: 433px;
    width: 100%;
  }
  .navContainer {
    display: flex;
    justify-content: end;
    align-items: center;
    padding-top: 40px;

    .cross {
      width: 39px;
      height: 39px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .daily_log_con {
    width: 970px;
    margin: 0 auto;
    overflow: hidden;
    position: absolute;
    top: 35%;
    left: 20%;

    .daily_log_wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 150px;
      .log_img {
        h1 {
          display: none;
        }
      }
      .daily_log_left {
        h2 {
          text-align: left;
          font: normal normal bold 30px/34px Arial;
          letter-spacing: 0px;
          color: #4f4f4f;
          opacity: 1;
          margin-bottom: 80px;
        }
        button {
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
          margin-bottom: 20.57px;
          display: block;
        }
        .pri_btn {
          background: #f1f9ff 0% 0% no-repeat padding-box;
          border-radius: 20px;
          opacity: 1;
          text-align: center;
          font: normal normal bold 14px/17px Arial;
          letter-spacing: 0px;
          color: #2699fb;
          opacity: 1;
        }
      }

      .daily_log_right {
        width: 540px;
        height: 701px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) and (min-width: 244px) {
    .daily_log_con {
      position: absolute;
      top: 15%;
      left: 0%;
    }
    .cross {
      width: 28px !important;
      height: 28px !important;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .daily_log_wrap {
      flex-direction: column-reverse;
      .daily_log_left {
        h2 {
          display: none !important;
        }
      }
      .log_img {
        margin-bottom: 58px;
        h1 {
          display: block !important;
          font: normal normal bold 24px/28px Arial;
          letter-spacing: 0px;
          color: #4f4f4f;
          margin-bottom: 19px;
        }
      }

      .daily_log_right {
        width: 314px !important;
        height: 408px !important;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export default NewDailyLog;
