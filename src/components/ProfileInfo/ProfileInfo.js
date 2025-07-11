import React from "react";
import styled from "styled-components";
import avatar from "../../images/profilePic.svg";

const ProfileInfo = () => {
  return (
    <Wrapper>
      <div className="profile_info">
        <div className="prof">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="user_all_info">
            <h1> Aayan Rahman</h1>

            <p>
              aayan374@gmail.com 16-02-20216 (5yrs) 14 Latymer Raod, Edmonton,
              N9 9PU, London, UK
            </p>

            <h6>Galliard School, Reception</h6>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 20%;
  background: #0063b7 0% 0% no-repeat padding-box;
  opacity: 1;
  height: 397px;
  padding-top: 40px;
  text-align: -webkit-right;
  /* margin-top: 46px; */

  .profile_info {
    .avatar {
      width: 116px;
      height: 116px;
      margin-right: 72px;
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .user_all_info {
      width: 250px;
      text-align: -webkit-center;
      /* margin-right: 10px; */

      h1 {
        text-align: center;
        font: normal normal bold 20px/20px Arial;
        letter-spacing: 0px;
        color: #ffffff;
        margin-bottom: 20px;
      }
      p {
        width: 150px;
        text-align: center;
        font: normal normal normal 16px/20px Arial;
        letter-spacing: 0px;
        color: #ffffff;
        margin-bottom: 20px;
      }
      h6 {
        text-align: center;
        font: normal normal normal 16px/20px Arial;
        letter-spacing: 0px;
        color: #ffffff;
      }
    }
  }
`;

export default ProfileInfo;
