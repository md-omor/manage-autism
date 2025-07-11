import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BreakfastSlide from "../FoodLogSlider/BreakfastSlide";

const FoodLogMob = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <div className="container">
        {/* breakfast component  */}
        <div className="items">
          <h2>Breakfast</h2>
          <div className="amount">
            <h4>Time</h4>
            <pre>Tuesday 2:03 PM</pre>
          </div>

          <BreakfastSlide />

          <div className="amount">
            <h4>Amount</h4>
            <div className="value">
              <p>Banana</p>
              <span>X1</span>
            </div>
            <div className="value">
              <p>Granola</p>
              <span>10gm</span>
            </div>
            <div className="value">
              <p>Milk</p>
              <span>1 Pint</span>
            </div>
          </div>
          <div className="amount">
            <h4>Appetite</h4>
            <select>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        {/* Lunch component  */}
        <div className="items">
          <h2>Lunch</h2>
          <div className="amount">
            <h4>Time</h4>
            <pre>Tuesday 2:03 PM</pre>
          </div>

          <BreakfastSlide />

          <div className="amount">
            <h4>Amount</h4>
            <div className="value">
              <p>Banana</p>
              <span>X1</span>
            </div>
            <div className="value">
              <p>Granola</p>
              <span>10gm</span>
            </div>
            <div className="value">
              <p>Milk</p>
              <span>1 Pint</span>
            </div>
          </div>
          <div className="amount">
            <h4>Appetite</h4>
            <select>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        {/* Snack component  */}
        <div className="items">
          <h2>Snack</h2>
          <div className="amount">
            <h4>Time</h4>
            <pre>Tuesday 2:03 PM</pre>
          </div>

          <BreakfastSlide />

          <div className="amount">
            <h4>Amount</h4>
            <div className="value">
              <p>Banana</p>
              <span>X1</span>
            </div>
            <div className="value">
              <p>Granola</p>
              <span>10gm</span>
            </div>
            <div className="value">
              <p>Milk</p>
              <span>1 Pint</span>
            </div>
          </div>
          <div className="amount">
            <h4>Appetite</h4>
            <select>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        {/* Dinner component  */}
        <div className="items">
          <h2>Dinner</h2>
          <div className="amount">
            <h4>Time</h4>
            <pre>Tuesday 2:03 PM</pre>
          </div>

          <BreakfastSlide />

          <div className="amount">
            <h4>Amount</h4>
            <div className="value">
              <p>Banana</p>
              <span>X1</span>
            </div>
            <div className="value">
              <p>Granola</p>
              <span>10gm</span>
            </div>
            <div className="value">
              <p>Milk</p>
              <span>1 Pint</span>
            </div>
          </div>
          <div className="amount">
            <h4>Appetite</h4>
            <select>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <Link to="/preview">
          <button className="prev_btn">Preview</button>
        </Link>
        <Link to="/profile">
          <button>Save</button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button {
    background: #2699fb 0% 0% no-repeat padding-box;
    border-radius: 20px;
    font: normal normal bold 14px/17px Poppins;
    letter-spacing: 0px;
    color: #ffffff;
    width: 100%;
    height: 39px;
    border: none;
    outline: none;
    animation: pulse 1.2s ease infinite;
  }
  button:hover {
    animation: none;
  }
  h2 {
    font: normal normal normal 16px/24px Poppins;
    letter-spacing: 0px;
    color: #2699fb;
  }
  .amount {
    background: #f1f9ff 0% 0% no-repeat padding-box;
    border: 1px solid #f1f9ff;
    padding: 9px 11px;
    margin-bottom: 10px;
    h4 {
      font: normal normal bold 13px/24px Poppins;
      letter-spacing: 0px;
      color: #000000;
    }
    pre {
      font: normal normal normal 13px/24px Poppins;
      letter-spacing: 0px;
      color: #4f4f4f;
      margin-top: -5px;
    }
    select {
      background: #f1f9ff 0% 0% no-repeat padding-box;
      border: 1px solid #f1f9ff;
      width: 100%;
      outline: none;
      font: normal normal normal 13px/24px Poppins;
      letter-spacing: 0px;
      color: #4f4f4f;
      margin-top: 4px;
    }
    .value {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font: normal normal normal 12px/24px Poppins;
      letter-spacing: 0px;
      color: #4f4f4f;
    }
  }
  .items {
    margin-bottom: 70px;
  }
  .items:last-child {
    margin-bottom: 0px;
  }

  .prev_btn {
    background: #f1f9ff 0% 0% no-repeat padding-box;
    border-radius: 20px;
    font: normal normal bold 14px/17px Arial;
    letter-spacing: 0px;
    color: #2699fb;
    width: 100%;
    height: 39px;
    border: none;
    outline: none;
    margin-bottom: 20px;
  }
`;

export default FoodLogMob;
