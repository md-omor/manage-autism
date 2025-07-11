import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AllLogs from "../AllButtonLog/AllLogs";
import Foodlog from "../FoodLog/Foodlog";
import WaterLog from "../FoodLog/WaterLog";
import Footer from "../Footers/Footer";
import ProfileNavbar from "../Navbars/ProfileNavbar";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
// import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
import ProfileLink from "../ProfileLink";

const CreateFoodLog = () => {
  const [createLog, setcreateLog] = useState(1);

  return (
    <Wrapper>
      <ProfileNavbar />
      <div className="link_to_page">
        <div className="blank"></div>
        <div className="page_link">
          <Link to="/profile">Home </Link> {" > "}
          Log
        </div>
      </div>
      <div>
        <div className="profile_top_wrap">
          <ProfileInfo />
          <AllLogs setcreateLog={setcreateLog} createLog={createLog} />
        </div>

        <div className="profile_top_wrap">
          <div className="profile_flex">
            <ProfileLink />
          </div>
          {createLog === 2 && (
            <div className="profile_flex_left">
              <WaterLog />
            </div>
          )}
          {createLog === 1 && (
            <div className="profile_flex_left">
              <Foodlog />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .profile_flex {
    width: 20%;
    margin-right: 12px;
  }
  .profile_flex_left {
    width: 80%;
  }

  .profile_top_wrap {
    display: flex;
  }
  .link_container {
    margin-top: 31px;

    h3 {
      font: normal normal normal 10px/12px Arial;
      letter-spacing: 0px;
      color: #4f4f4f;
      opacity: 1;
      a {
        color: #4f4f4f;
      }
    }
  }
  .profile_top_blank {
    width: 80%;
    background: #f1f9ff 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-left: 12px;
    height: 397px;
  }
  .link_to_page {
    display: flex;
    flex-direction: row;
    align-items: center;
    .blank {
      width: 20%;
      margin-right: 12px;
    }
    .page_link {
      width: 80%;
      font: normal normal normal 14px/16px Arial;
      letter-spacing: 0px;
      color: #4f4f4f;
      opacity: 1;
      margin-top: 31px;
      a {
        color: #4f4f4f;
      }
    }
  }
`;

export default CreateFoodLog;
