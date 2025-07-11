import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import checkList from "../../images/checkList.svg";
import close from "../../images/close.svg";
import ProfileChartMob from "../Charts/ProfileChartMob";
import FooterMobile from "../Footers/FooterMobile";
import ProgressFeedback from "../ProfileFeedback/ProgressFeedback";
import ProfileInfoMob from "../ProfileInfo/ProfileInfoMob";

const ProgressMob = () => {
  return (
    <Wrapper>
      <div className="daily_log">
        <div className="navContainer container">
          <Link to="/profile">
            <div className="cross">
              <img src={close} alt="close" />
            </div>
          </Link>
        </div>
      </div>
      <ProfileInfoMob />
      <div className="progress_container third_btn">
        <div className="button">
          <button>Share</button>
        </div>
      </div>

      <ProfileChartMob />
      <div className="progress_container">
        <div className="progress_check_list">
          <img src={checkList} alt="checkList" />
        </div>
      </div>
      <ProgressFeedback />
      <FooterMobile />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .progress_container {
    width: 100% !important;
    margin: 0 auto !important;
    padding: 29px;
    overflow: hidden;
    border: none;
  }
  .third_btn {
    padding: 0 29px !important;
    margin-bottom: 37px !important;
  }
  .progress_check_list {
    width: 311px;
    height: 415;
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .button {
    display: flex;
    flex-direction: column;
    align-items: end;
    button {
      width: 100%;
      height: 39px;
      background: #f1f9ff 0% 0% no-repeat padding-box;
      border-radius: 20px;
      text-align: center;
      font: normal normal bold 14px/17px Arial;
      letter-spacing: 0px;
      color: #2699fb;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }

  .navContainer {
    display: flex;
    justify-content: end;
    align-items: center;
    padding-top: 19px;

    .cross {
      width: 39px;
      height: 39px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default ProgressMob;
