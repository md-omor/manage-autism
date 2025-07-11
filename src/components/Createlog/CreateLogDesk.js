import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footers/Footer";
import LogCreate from "../LogCreate";
import ProfileNavbar from "../Navbars/ProfileNavbar";
import ProfileFeedback from "../ProfileFeedback/ProfileFeedback";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfileLink from "../ProfileLink";

const CreateLogDesk = () => {
  return (
    <Wrapper>
      <ProfileNavbar />
      <div className="link_to_page">
        <div className="blank"></div>
        <div className="page_link">
          <Link to="/profile">Home</Link>
          {" > "} Messages
        </div>
      </div>
      <div className="profile_wrap_re">
        <div className="profile_top_wrap">
          <ProfileInfo />
          <div className="profile_top_blank"></div>
          {/* <ProfileInvite /> */}
        </div>

        <div className="profile_top_wrap">
          <div className="profile_flex">
            <ProfileLink />
          </div>
          <div className="profile_flex_left">
            <LogCreate />
            <ProfileFeedback />
          </div>
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
    transform: translateY(-400px);
  }

  .profile_top_wrap {
    display: flex;
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

export default CreateLogDesk;
