import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileLink = () => {
  return (
    <Wrapper>
      <div className="profile_summary">
        <div className="prof_link">
          <div className="prof_link_top">
            <h4>LOGS</h4>
            <h4>DIARY</h4>
            <h4>GP</h4>
            <h4>REFFERALS</h4>
            <h4>SCHOOLS</h4>
            <h4>COUNCILS</h4>
            <h4>PRIVATE</h4>
            <h4>IMPORTANT DOCS</h4>
            <Link to="/createlog" className="btn_ani prof_messa ">
              <h4>MESSAGES</h4>
              <span>3</span>
            </Link>
            <h4>CONTACTS</h4>
          </div>

          <div className="prof_link_top">
            <h4>FAQ</h4>
            <h4>HELP</h4>
            <h4>SETTINGS</h4>
            <Link to="/" className="prof_messa btn_ani">
              <h4>LOGOUT</h4>
            </Link>
          </div>
        </div>

        <div className="prof_link_bottom"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-right: 12px;
  height: 100%;

  .prof {
    width: 245px;
    margin: 0;
  }
  .prof_link {
    width: 250px;
    margin: 0 0 0 auto;
  }

  .profile_summary {
    background: #2699fb 0% 0% no-repeat padding-box;
    opacity: 1;
    height: 100%;
    .prof_link_top {
      padding: 37px 0;
      border-bottom: 1px solid #fff;
      width: 90%;
      h4 {
        font: normal normal normal 18px/18px Arial;
        letter-spacing: 0px;
        color: #ffffff;
        text-shadow: 0px 3px 6px #00000029;
        text-transform: capitalize;
        opacity: 1;
        margin-bottom: 10px;
      }
      .prof_messa {
        display: flex;
        align-items: center;
        span {
          margin-bottom: 10px;
          background: #fb4d4d 0% 0% no-repeat padding-box;
          opacity: 1;
          width: 21px;
          height: 21px;
          border-radius: 50%;
          font: normal normal bold 14px/12px Arial;
          letter-spacing: 0px;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 8px;
        }
      }
    }
    .btn_ani {
      box-shadow: 0 0 0 0 rgba(#5a99d4, 0.5) !important;
      animation: pulse 1.5s ease infinite;
    }
    .btn_ani:hover {
      animation: none;
    }
    .prof_link_top:nth-child(2) {
      border: none;
    }
  }
`;

export default ProfileLink;
