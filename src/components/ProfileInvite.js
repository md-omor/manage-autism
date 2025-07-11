import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileInvite = () => {
  return (
    <Wrapper>
      <div className="profile_container">
        <div className="profile_invite_wrap">
          <div className="profile_invite_left">
            <h1>Diagnosis & Symptoms</h1>
            <div className="profile_inv_wrap">
              <div className="invit_left">
                <div className="ptofile_invi_intro">
                  <h3>ASD</h3>
                  <p>Speech Delay • Social Communication difficulties</p>
                </div>
                <div className="ptofile_invi_intro">
                  <h3>ADHD</h3>
                  <p>Hyperactivity</p>
                </div>
                <div className="ptofile_invi_intro">
                  <h3>Epilespy</h3>
                  <p>Early stages of 2 episodes</p>
                </div>
              </div>
              <div className="invit_right">
                <div className="ptofile_invi_intro last">
                  <h3>Sensory Processing Disorder</h3>
                  <p>
                    Jumping • Putting things in his mouth • Constantly running •
                    Over and under sensitive • Grinding teeth • Chewing clothes
                    • Hot and cold • Blocking sound • Sleep • Food • Water
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile_invite_right">
            <div className="date">
              <span>Date / Time: </span> <p> Tue, 14 April 2021 | 14:10 </p>
            </div>

            <div className="button">
              <button>Invite</button>

              <Link to="/progress" className="sum_button">
                Summary
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  background: #f1f9ff 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-left: 12px;
  height: 397px;
  /* margin-top: 46px; */

  .profile_container {
    height: 397px;

    .profile_invite_wrap {
      display: flex;
      justify-content: space-between;
    }
    .profile_inv_wrap {
      display: flex;
      justify-content: space-between;
      .invit_left {
        margin-right: 30px;
      }
    }
    .profile_invite_left {
      h1 {
        text-align: left;
        letter-spacing: 0.24px;
        color: #131523;
        opacity: 1;
        font-family: "Poppins", sans-serif;
      }
      .ptofile_invi_intro {
        background: #ffffff 0% 0% no-repeat padding-box;
        border: 1px solid #f1f9ff;
        opacity: 1;
        width: 416px;
        height: 73px;
        padding: 7px 10px;
        margin-top: 20px;
        h3 {
          font: normal normal bold 20px/24px Arial;
          letter-spacing: 0px;
          color: #000000;
          opacity: 1;
          margin-bottom: 7px;
        }
        P {
          font: normal normal normal 18px/24px Arial;
          letter-spacing: 0px;
          color: #4f4f4f;
          opacity: 1;
        }
      }
      .last {
        width: 350px;
        height: 164px;
        padding: 5px 10px;
      }
    }

    .profile_invite_right {
      margin-left: 29px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .date {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          text-align: left;
          font: normal normal normal 20px/14px Arial;
          letter-spacing: 0px;
          color: #2699fb;
          opacity: 1;
          margin-right: 4px;
        }
        p {
          font: normal normal normal 18px/14px Arial;
          letter-spacing: 0px;
          color: #4f4f4f;
          opacity: 1;
        }
      }
      .button {
        display: flex;
        flex-direction: column;
        align-items: end;
        button {
          background: #ffffff 0% 0% no-repeat padding-box;
          border-radius: 20px;
          opacity: 1;
          font: normal normal bold 20px/17px Arial;
          letter-spacing: 0px;
          color: #2699fb;
          width: 286px;
          height: 39px;
          border: none;
          outline: none;
          cursor: pointer;
        }
        .sum_button {
          background: #2699fb 0% 0% no-repeat padding-box;
          color: #ffffff;
          margin-top: 20px;
          opacity: 1;
          width: 286px;
          height: 39px;
          border: none;
          outline: none;
          cursor: pointer;
          font: normal normal bold 20px/17px Arial;
          letter-spacing: 0px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 0 rgba(#5a99d4, 0.5) !important;
          animation: pulse 1.2s ease infinite;
        }
        .sum_button:hover {
          animation: none;
        }
      }
    }
  }
`;

export default ProfileInvite;
