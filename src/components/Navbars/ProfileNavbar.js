import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bell from "../../images/bell.svg";
import logo from "../../images/Manage-Autism-Logo.svg";
import message from "../../images/message.svg";

const ProfileNavbar = () => {
  return (
    <Wrapper>
      {/* <div className="navContainer"> */}
      <div className="navWrapper">
        <div className="nav_wrap">
          <div className="logo">
            <Link to="/profile">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>

        <div className="menu">
          <div className="menu_wrap">
            <ul>
              <Link to="/profile">
                <li>Home</li>
              </Link>
              <Link to="/foodlog">
                <li>Logs</li>
              </Link>

              <li>Links</li>
              <li>Help</li>
            </ul>
            <div className="notification_info_wrap">
              <Link to="#">
                <div className="notifi_img">
                  <img src={bell} alt="bell" />
                  <p className="notification_count1">7</p>
                </div>
              </Link>
              <Link to="/createlog">
                <div className="notifi_img message_ani">
                  <img src={message} alt="message" />
                  <p className="notification_count2">7</p>
                </div>
              </Link>
              <Link to="/profile">
                <div className="user_name">
                  <h4>AR</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
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
      justify-content: end;
      .menu_wrap {
        display: flex;
        align-items: center;
        width: 1200px;
        margin: 0 auto;
        justify-content: end;
        ul {
          display: flex;
          align-items: center;
          margin-right: 134px;

          li {
            margin-right: 66px;
            font: normal normal bold 20px/12px Arial;
            letter-spacing: 0px;
            color: #4f4f4f;
            opacity: 1;
            cursor: pointer;
          }
        }
      }
    }
  }

  .notification_info_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    .notifi_img {
      width: 45px;
      height: 35px;
      margin-right: 24px;
      display: flex;

      img {
        width: 100%;
        height: 100%;
      }
      p {
        text-align: left;
        font: normal normal bold 14px/12px Arial;
        letter-spacing: 0px;
        color: #ffffff;
        opacity: 1;
        margin-left: -20px;
        margin-top: 5px;
      }
    }
    .message_ani {
      box-shadow: 0 0 0 0 rgba(#5a99d4, 0.5) !important;
      animation: pulse 1.1s ease infinite;
    }

    .message_ani:hover {
      animation: none;
    }
    .notification_count2 {
      margin-left: -14px !important;
      margin-top: 6px !important;
    }

    .user_name {
      background: #57b8ff 0% 0% no-repeat padding-box;
      opacity: 1;
      width: 42px;
      height: 42px;
      font: normal normal bold 16px/25px Poppins;
      letter-spacing: 0px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 0 0 0 rgba(#5a99d4, 0.5) !important;
      animation: pulse 1.1s ease infinite;
    }
    .user_name:hover {
      animation: none;
    }
  }
`;

export default ProfileNavbar;
