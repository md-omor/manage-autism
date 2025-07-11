import React from "react";
import styled from "styled-components";
import FoodLogSlider from "../FoodLogSlider/FoodLogSlider";
import FoodValue from "./FoodValue";

const Foodlog = () => {
  // const [foodValue, setfoodValue] = useState(null);
  return (
    <Wrapper>
      <div className="profile_container">
        <h1>Breakfast</h1>
        <div className="food_log">
          <FoodLogSlider />
          <FoodValue foodValue={250} />
          <div className="new_food">
            <h3>Tried something New</h3>
            <textarea cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="create_log">
          <button>Add Another Entry</button>
        </div>
      </div>
      <div className="profile_container">
        <h1>Lunch</h1>
        <div className="food_log">
          <FoodLogSlider />
          <FoodValue foodValue={500} />
          <div className="new_food">
            <h3>Tried something New</h3>
            <textarea cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="create_log">
          <button>Add Another Entry</button>
        </div>
      </div>
      <div className="profile_container">
        <h1>Dinner</h1>
        <div className="food_log">
          <FoodLogSlider />
          <FoodValue foodValue={300} />
          <div className="new_food">
            <h3>Tried something New</h3>
            <textarea cols="30" rows="10"></textarea>
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
  }
  h1 {
    letter-spacing: 0.24px;
    color: #131523;
    opacity: 1;
    font-family: "Poppins", sans-serif;
  }

  .food_log {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .new_food {
    h3 {
      font: normal normal bold 25px/12px Arial;
      letter-spacing: 0px;
      color: #2699fb;
      opacity: 1;
      margin-bottom: 22px;
    }
    textarea {
      width: 375px;
      height: 170px;
      background: #f1f9ff 0% 0% no-repeat padding-box;
      border: 1px solid #f1f9ff;
      opacity: 1;
      outline: none;
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

export default Foodlog;
