import React from "react";
import styled from "styled-components";
import CreateLogDesk from "../components/Createlog/CreateLogDesk";
import CreateLogMobile from "../components/Createlog/CreateLogMobile";

const CreateLogPage = () => {
  return (
    <Wrapper>
      <div className="createdlogDesk">
        <CreateLogDesk />
      </div>
      <div className="createdlogMobi">
        <CreateLogMobile />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .createdlogMobi {
    display: none;
  }
  .createdlogDesk {
    display: block;
  }
  @media only screen and (max-width: 1024px) and (min-width: 244px) {
    .createdlogDesk {
      display: none;
    }
    .createdlogMobi {
      display: block;
    }
  }
`;

export default CreateLogPage;
