import React from "react";
import styled from "styled-components";
import water_img from "../../images/waterLog.svg";

const WaterLog = () => {
  return (
    <Wrapper>
      <div className="profile_container">
        <h1>Fluid Intake</h1>
        <div className="water_log">
          <div className="water_img">
            <img src={water_img} alt="water img" />
          </div>
          <div className="water_log_wrap">
            <div className="amount">
              <h2>Time</h2>
              <select>
                <option value="2:03 PM">2:03 PM</option>
                <option value="2:03 PM">2:04 PM</option>
              </select>
              <select>
                <option value="2:03 PM">2:03 PM</option>
                <option value="2:03 PM">2:04 PM</option>
              </select>
              <select>
                <option value="2:03 PM">2:03 PM</option>
                <option value="2:03 PM">2:04 PM</option>
              </select>
              <select>
                <option value="2:03 PM">2:03 PM</option>
                <option value="2:03 PM">2:04 PM</option>
              </select>
            </div>
            <div className="amount">
              <h2>Fluid Type</h2>
              <input type="text" value="Water" />
              <input type="text" value="Milk" />
              <input type="text" value="Orange Juice" />
              <input type="text" value="Tinchers" />
            </div>
            <div className="amount">
              <h2>Amount</h2>
              <input type="text" value="500 ML" />
              <input type="text" value="250 ML" />
              <input type="text" value="300 ML" />
              <input type="text" value="2 ML" />
            </div>
            <div className="amount">
              <h2>Appetite</h2>
              <select className="value_select">
                <option value="2:03 PM">Low</option>
                <option value="2:03 PM">Normal</option>
              </select>
              <select className="value_select">
                <option value="2:03 PM">Normal</option>
                <option value="2:03 PM">Normal</option>
              </select>
              <select className="value_select">
                <option value="2:03 PM">Very Good (extra)</option>
                <option value="2:03 PM">Very Good (extra)</option>
              </select>
              <select className="value_select">
                <option value="2:03 PM">Very Good (extra)</option>
                <option value="2:03 PM">Very Good (extra)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="create_log">
          <button>Add Another Entry</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .profile_container {
    border-bottom: 3px solid #f1f9ff;
    opacity: 1;
    h1 {
      letter-spacing: 0.24px;
      color: #131523;
      opacity: 1;
      font-family: "Poppins", sans-serif;
      margin-bottom: 50px;
    }
  }
  .water_log {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .water_log_wrap {
    display: flex;
    align-items: center;
    border-bottom: 3px solid #f1f9ff;
    opacity: 1;
    padding-bottom: 20px;

    .amount {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      margin-right: 25px;

      h2 {
        text-align: center;
        font: normal normal bold 24px/12px Arial;
        letter-spacing: 0px;
        color: #2699fb;
        opacity: 1;
        margin-bottom: 40px;
      }
      select {
        background: #f1f9ff 0% 0% no-repeat padding-box;
        border: 1px solid #f1f9ff;
        opacity: 1;
        /* width: 138px; */
        height: 60px;
        margin-bottom: 20px;
        padding: 10px 11px;
        outline: none;
        font: normal normal normal 18px/24px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
      }
      .value_select {
        width: 230px;
      }

      input {
        background: #f1f9ff 0% 0% no-repeat padding-box;
        border: 1px solid #f1f9ff;
        opacity: 1;
        width: 138px;
        height: 60px;
        margin-bottom: 20px;
        outline: none;
        padding: 10px 11px;
        font: normal normal normal 18px/24px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
      }
    }
  }
  .create_log {
    display: flex;
    justify-content: center;
    button {
      width: 536px;
      height: 39px;
      background: #2699fb 0% 0% no-repeat padding-box;
      border-radius: 20px;
      opacity: 1;
      border: none;
      outline: none;
      font: normal normal bold 17px/17px Arial;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
      margin: 50px 0;
      cursor: pointer;
    }
  }
`;

export default WaterLog;
