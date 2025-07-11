import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AllLogs = ({ createLog, setcreateLog }) => {
  return (
    <Wrapper>
      <div className="profile_container">
        <div className="profile_invite_wrap">
          <div className="profile_invite_left">
            <h1>Add New Log</h1>

            <div className="log_btn">
              <button
                className={`create_log_btn btn_anim ${
                  createLog === 1 && "active"
                }`}
                onClick={() => setcreateLog(1)}
              >
                Food
              </button>
              <button
                className={`create_log_btn btn_anim ${
                  createLog === 2 && "active"
                }`}
                onClick={() => setcreateLog(2)}
              >
                Fluid intake
              </button>
              <button className="create_log_btn">Sleep</button>
              <button className="create_log_btn">Distress</button>
              <button className="create_log_btn">Constipation</button>
              <button className="create_log_btn">Medications</button>
              <button className="create_log_btn">Behavious</button>
              <button className="create_log_btn">Build Up</button>
              <button className="create_log_btn">Something wrong</button>
              <button className="create_log_btn">Nappy changed</button>
              <button className="create_log_btn">Tried something new</button>
              <button className="create_log_btn">Meltdown</button>
            </div>
          </div>
          <div className="profile_invite_right">
            <div className="button">
              <Link to="/newdailylog">
                <button className="btn_anim">Print Blank Log Sheet</button>
              </Link>
              <Link to="/preview">
                <button className="btn_anim">Preview</button>
              </Link>
              <button>Save</button>

              <Link to="#">
                <button className="sum_button">Edit</button>
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
    }

    .log_btn {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 706px;
      margin-top: 34px;
      .create_log_btn {
        background: #2699fb 0% 0% no-repeat padding-box;
        border-radius: 4px;
        opacity: 0.7;
        text-align: center;
        font: normal normal 17px/12px Poppins;
        letter-spacing: 0px;
        color: #ffffff;
        padding: 14px 22px;
        border: none;
        outline: none;
        margin: 0 14px 10px 0px;
        cursor: pointer;
      }
      .create_log_btn.active {
        opacity: 1;
      }
    }

    .profile_invite_right {
      margin-left: 29px;
      display: flex;
      align-items: end;

      .button {
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-top: 10px;

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
          margin-bottom: 20px;
        }
        .btn_anim {
          animation: pulse 1.2s ease infinite;
        }
        .btn_anim:hover {
          animation: none;
        }
        .sum_button {
          background: #2699fb 0% 0% no-repeat padding-box;
          color: #ffffff;
          margin-bottom: 20px;
          opacity: 1;
          width: 286px;
          height: 39px;
          border: none;
          outline: none;
          cursor: pointer;
          font: normal normal bold 20px/17px Arial;
          letter-spacing: 0px;
        }
      }
    }
  }
`;

export default AllLogs;
