import React from "react";
import styled from "styled-components";
import Progress from "../components/ProgressPage/Progress";
import ProgressMob from "../components/ProgressPage/ProgressMob";

const ProgressCheck = () => {
  return (
    <Wrapper>
      <div className="progress_desktop">
        <Progress />
      </div>
      <div className="progress_mobile">
        <ProgressMob />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .progress_mobile {
    display: none;
  }
  .progress_desktop {
    display: block;
  }
  @media only screen and (max-width: 1024px) and (min-width: 244px) {
    .progress_desktop {
      display: none;
    }
    .progress_mobile {
      display: block;
    }
  }
`;

export default ProgressCheck;
