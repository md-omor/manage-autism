import React from "react";
import styled from "styled-components";

const FoodValue = ({ foodValue }) => {
  return (
    <Wrapper>
      <div className="food_value">
        <div className="time">
          <h3>Time</h3>
          <select>
            <option value="2:03 PM">2:03 PM</option>
            <option value="2:03 PM">2:04 PM</option>
            <option value="2:03 PM">2:04 PM</option>
          </select>
        </div>
        <div className="time">
          <h3>Amount</h3>
          <input type="text" placeholder={`${foodValue}g`} />
        </div>
        <div className="time">
          <h3>Appetite</h3>
          <select>
            <option value="Very Good (extra)">Very Good (extra)</option>
            <option value="Very Good (extra)">Very Good (extra)</option>
            <option value="Very Good (extra)">Very Good (extra)</option>
          </select>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .food_value {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .time {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      h3 {
        font: normal normal bold 25px/12px Arial;
        letter-spacing: 0px;
        color: #2699fb;
        opacity: 1;
      }
      select {
        background: #f1f9ff 0% 0% no-repeat padding-box;
        border: 1px solid #f1f9ff;
        opacity: 1;
        width: 260px;
        height: 60px;
        padding: 10px 11px;
        outline: none;
        font: normal normal normal 18px/24px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
        margin-left: 22px;
      }
      input {
        background: #f1f9ff 0% 0% no-repeat padding-box;
        border: 1px solid #f1f9ff;
        opacity: 1;
        width: 260px;
        height: 60px;
        padding: 10px 15px;
        outline: none;
        font: normal normal normal 18px/24px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
        margin-left: 22px;
      }
    }
  }
`;

export default FoodValue;
