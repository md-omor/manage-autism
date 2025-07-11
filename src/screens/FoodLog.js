import React from "react";
import styled from "styled-components";
import CreateFoodLog from "../components/CreateFoodLog/CreateFoodLog";
import CreateLogFoodMob from "../components/CreateFoodLog/CreateLogFoodMob";

const FoodLog = () => {
  return (
    <Wrapper>
      <div className="food_log_desk">
        <CreateFoodLog />
      </div>
      <div className="food_log_mob">
        <CreateLogFoodMob />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .food_log_mob {
    display: none;
  }
  .food_log_desk {
    display: block;
  }
  @media only screen and (max-width: 1024px) and (min-width: 244px) {
    .food_log_desk {
      display: none;
    }
    .food_log_mob {
      display: block;
    }
  }
`;

export default FoodLog;
