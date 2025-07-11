import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProfileChart from "../Charts/ProfileChart";
import Footer from "../Footers/Footer";
import ProfileNavbar from "../Navbars/ProfileNavbar";
import ProfileFeedback from "../ProfileFeedback/ProfileFeedback";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfileInvite from "../ProfileInvite";
import ProfileLink from "../ProfileLink";
import ProfileSlide from "../ProgressSlides/ProfileSlide";

const MainProfile = () => {
  return (
    <Wrapper>
      <div className="main_profile_desk">
        <ProfileNavbar />

        <div className="link_to_page">
          <div className="blank"></div>
          <div className="page_link">
            <Link to="/profile">Home</Link>
            {" > "} Profile Updates
          </div>
        </div>

        <div className="profile_top_wrap">
          <ProfileInfo />
          <ProfileInvite />
        </div>
        <div className="profile_top_wrap">
          <div className="profile_flex">
            <ProfileLink />
          </div>
          <div className="profile_flex_left">
            <ProfileChart />
            <ProfileSlide />
            <ProfileFeedback />
          </div>
        </div>
        <Footer />
      </div>

      <div className="main_profile_mob"></div>
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

  .profile_top_wrap {
    display: flex;
  }

  @media only screen and (max-width: 1024px) and (min-width: 244px) {
    .main_profile_desk {
      display: none;
    }
  }
`;

export default MainProfile;
