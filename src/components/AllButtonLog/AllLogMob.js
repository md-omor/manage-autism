import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const AllLogMob = ({ createLog, setcreateLog }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="daily_log_food">
          <h1>Add Daily Log</h1>
          <Link to="/newdailylog">
            <button>Print Blank Log Sheet Here</button>
          </Link>
        </div>
      </div>

      <div className="all_btn_wrap">
        <div className="all_btn">
          <button
            //   className={`create_log_btn ${createLog === 1 && "active"}`}
            className="create_log_btn"
            //   onClick={() => setcreateLog(1)}
          >
            Food
          </button>
        </div>
        <div className="all_btn">
          <button
            //   className={`create_log_btn ${createLog === 1 && "active"}`}
            className="create_log_btn"
            //   onClick={() => setcreateLog(1)}
          >
            Fluid intake
          </button>
        </div>
        <div className="all_btn">
          <button
            //   className={`create_log_btn ${createLog === 1 && "active"}`}
            className="create_log_btn"
            //   onClick={() => setcreateLog(1)}
          >
            Sleep
          </button>
        </div>
        <div className="all_btn">
          <button className="create_log_btn">Distress</button>
        </div>
        <div className="all_btn">
          <button className="create_log_btn">Constipation</button>
        </div>
        <div className="all_btn">
          <button className="create_log_btn">Medications</button>
        </div>
        <div className="all_btn">
          <button className="create_log_btn">Behavious</button>
        </div>
        <div className="all_btn">
          <button className="create_log_btn">Build Up</button>
        </div>
        <div className="all_btn">
          <button className="create_log_btn">Something wrong</button>
        </div>
        <div className="all_btn">
          <button className="create_log_btn">Nappy changed</button>
        </div>
        <div className="all_btn">
          <button className="create_log_btn">Tried something new</button>
        </div>
        <div className="all_btn">
          <button className="create_log_btn">Meltdown</button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .daily_log_food {
    h1 {
      font: normal normal bold 24px/28px Arial;
      letter-spacing: 0px;
      color: #4f4f4f;
      margin-bottom: 31px;
    }
    button {
      background: #f1f9ff 0% 0% no-repeat padding-box;
      border-radius: 20px;
      font: normal normal bold 14px/17px Arial;
      letter-spacing: 0px;
      color: #2699fb;
      width: 100%;
      height: 39px;
      border: none;
      outline: none;
      margin-bottom: -10px;
    }
  }
  .all_btn_wrap {
    background: #f1f9ff 0% 0% no-repeat padding-box;
    display: flex;
    align-items: center;
    overflow-y: hidden;
    overflow-x: scroll;
    height: 70px;
    .create_log_btn {
      background: #2699fb 0% 0% no-repeat padding-box;
      border-radius: 4px;
      font: normal normal 11px/10px Poppins;
      letter-spacing: 0px;
      color: #ffffff;
      width: 90px;
      height: 32px;
      border: none;
      outline: none;
      cursor: pointer;
      margin: 0 8px;
    }
  }
`;

export default AllLogMob;
