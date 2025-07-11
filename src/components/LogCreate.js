import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import checkList from "../images/checkList.svg";

const LogCreate = () => {
  return (
    <Wrapper>
      <div className="log">
        <div className="profile_container">
          <div className="log_wrap">
            <div className="log_create_left">
              <h1>Messages</h1>
              <div className="log_img">
                <img src={checkList} alt="checkList" />
              </div>
            </div>
            <div className="log_create_right">
              <div className="log_button">
                <button>Received</button>
                <button>Sent</button>
                <button>Urgent</button>
              </div>
              <div className="log_text_area">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Aayan's Situation is getting worse by the day, we cant wait for the long referrals, please arrange to see him soon as possible."
                ></textarea>
                <Link to="/profile">
                  <button>Send</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-bottom: 180px;

  /* height: 100%; */

  /* .log {
    background: #f1f9ff 0% 0% no-repeat padding-box;
    opacity: 1;
    height: 397px;
    width: 100%;
  } */

  .log_wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;

    .log_create_left {
      h1 {
        letter-spacing: 0.24px;
        color: #131523;
        opacity: 1;
        font-family: "Poppins", sans-serif;
      }
      .log_img {
        width: 515px;
        height: 735px;
        margin-top: 80px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .log_create_right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: end;
      .log_button {
        button {
          background: #ffffff 0% 0% no-repeat padding-box;
          border-radius: 20px;
          opacity: 1;
          width: 286px;
          height: 39px;
          display: block;
          font: normal normal bold 20px/17px Arial;
          letter-spacing: 0px;
          color: #2699fb;
          opacity: 1;
          border: none;
          outline: none;
          margin-bottom: 20px;
          cursor: pointer;
        }
        button:nth-child(3) {
          background: #2699fb 0% 0% no-repeat padding-box;
          color: #ffffff;
        }
      }

      .log_text_area {
        text-align: end;

        textarea {
          background: #ffffff 0% 0% no-repeat padding-box;
          border: 1px solid #4f4f4f;
          border-radius: 10px;
          opacity: 1;
          width: 674px;
          height: 486px;
          padding: 23px 36px;
          font: normal normal normal 20px/27px Segoe UI;
          letter-spacing: 0px;
          color: #4f4f4f;
          outline: none;
          display: block;
        }
        button {
          background: #2699fb 0% 0% no-repeat padding-box;
          border-radius: 20px;
          opacity: 1;
          width: 286px;
          height: 39px;
          font: normal normal bold 20px/17px Arial;
          letter-spacing: 0px;
          color: #ffffff;
          opacity: 1;
          border: none;
          outline: none;
          margin-top: 22.87px;
          cursor: pointer;
          animation: pulse 1.2s ease infinite;
        }
        button:hover {
          animation: none;
        }
      }
    }
  }
`;

export default LogCreate;
