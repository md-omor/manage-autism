import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bell from "../../images/bell.svg";
import message from "../../images/message.svg";
import hamburger from "../../images/mobileImages/list.svg";
import search from "../../images/mobileImages/Search.svg";
const ProfileNavbarMob = () => {
  return (
    <Wrapper>
      <div className="navContainer">
        <div className="nav_wrap">
          <div className="nav_hamburger">
            <Link to="/profile">
              <div className="hamburger">
                <img src={hamburger} alt="hamburger" />
              </div>
            </Link>

            <div className="search">
              <img src={search} alt="search" />
            </div>
          </div>
          <div className="notification_info_wrap">
            <div className="notifi_img">
              <img src={bell} alt="bell" />
              <p className="notification_count">7</p>
            </div>
            <Link to="/createlog">
              <div className="notifi_img message_ani">
                <img src={message} alt="message" />
                <p className="notification_count message_count">7</p>
              </div>
            </Link>

            <Link to="/" className="user_name">
              <h4>AR</h4>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .navContainer {
    padding: 12px 16px 0 20px;
    overflow: hidden;
    width: 100% !important;
  }
  .nav_wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav_hamburger {
      display: flex;
      align-items: center;
      .hamburger {
        margin-right: 6px;
        width: 20px;
        height: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .search {
        width: 16px;
        height: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .notification_info_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    .notifi_img {
      width: 34px;
      height: 26px;
      margin-right: 10px;
      display: flex;
      img {
        width: 100%;
        height: 100%;
      }
      p {
        font: normal normal bold 8px/5px Arial;
        letter-spacing: 0px;
        color: #090909;
        opacity: 1;
        margin-left: -13px;
        margin-top: 5px;
      }
    }
    .notifi_img:nth-child(2) {
      p {
        margin-left: -8px;
        margin-top: 6px;
      }
    }

    .user_name {
      background: #57b8ff 0% 0% no-repeat padding-box;
      opacity: 1;
      width: 21px;
      height: 21px;
      font: normal normal bold 8px/12px Poppins;
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
    .message_ani {
      box-shadow: 0 0 0 0 rgba(#5a99d4, 0.5) !important;
      animation: pulse 1.1s ease infinite;
    }

    .message_ani:hover {
      animation: none;
    }
  }
  .message_count {
    margin-left: -9px !important;
    margin-top: 6px !important;
  }
`;

export default ProfileNavbarMob;
