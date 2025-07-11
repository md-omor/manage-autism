import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import checkList from "../../images/checkList.svg";
import close from "../../images/close.svg";
import logo from "../../images/Manage-Autism-Logo.svg";
import ProgessChart from "../Charts/ProgessChart";
import ProgressFeedback from "../ProfileFeedback/ProgressFeedback";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfileInviteSec from "../ProfileInviteSec";
import ProgressSlide from "../ProgressSlides/ProgressSlide";

const Progress = () => {
  return (
    <Wrapper>
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
            <Link to="/profile">
              <img src={close} alt="close" />
            </Link>
          </div>
        </div>
      </div>

      <div className="link_to_page">
        <div className="blank"></div>
        <div className="page_link">
          <Link to="/profile">Home</Link>
          {" > "} Summary Report
        </div>
      </div>

      <div className="profile_top_wrap">
        <ProfileInfo />
        <ProfileInviteSec />
      </div>

      <div className="navContainer">
        <div className="progress_wrap">
          <div className="progess_paper">
            <h1>Summary Report</h1>
            <div className="progress_check_list">
              <img src={checkList} alt="checkList" />
            </div>
          </div>

          <div className="progress_chart">
            <ProgessChart />
          </div>
          <div className="progress_chart">
            <ProgressSlide />
          </div>
        </div>
      </div>

      <div className="navContainer">
        <ProgressFeedback />
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

  .profile_top_wrap {
    display: flex;
  }

  .progress_wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 38px;
    padding-bottom: 45px;
  }

  .progess_paper {
    h1 {
      letter-spacing: 0.24px;
      color: #131523;
      opacity: 1;
      font-family: "Poppins", sans-serif;
      margin-bottom: 17px;
    }
    .progress_check_list {
      width: 340px;
      height: 440px;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .link_to_page {
    display: flex;
    flex-direction: row;
    align-items: center;
    .blank {
      width: 20%;
      margin-right: 12px;
    }
    .page_link {
      width: 80%;
      font: normal normal normal 14px/16px Arial;
      letter-spacing: 0px;
      color: #4f4f4f;
      opacity: 1;
      margin-top: 31px;
      a {
        color: #4f4f4f;
      }
    }
  }

  .progress_chart {
    /* width: 640px; */
    margin-right: 10px;
  }
  .progress_chart:nth-child(3) {
    margin-right: 0;
  }
`;

export default Progress;
