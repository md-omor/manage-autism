import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileInfoMob = () => {
  const [path, setpath] = useState("");
  useEffect(() => {
    const profile = window.location.pathname;
    setpath(profile);
  }, [path]);
  return (
    <Wrapper>
      <div className="container">
        <div className="date">
          <span>Date / Time: </span> <p> Tue, 14 April 2021 | 14:10 </p>
        </div>
        <div className="profile_info">
          <h2>Address</h2>

          <div className="loca">
            <p>14 Latymer Raod, Edmonton, N9 9PU, London, UK</p>
          </div>
          <div className="ptofile_invi_intro">
            <h4>ASD</h4>
            <p>Speech Delay • Social Communication difficulties</p>
          </div>
          <div className="ptofile_invi_intro">
            <h4>ADHD</h4>
            <p>Hyperactivity</p>
          </div>
          <div className="ptofile_invi_intro">
            <h4>Epilespy</h4>
            <p>Early stages of 2 episodes</p>
          </div>
          <div className="ptofile_invi_intro">
            <h4>ASD</h4>
            <p>
              Jumping • Putting things in his mouth • Constantly running • Over
              and under sensitive • Grinding teeth • Chewing clothes • Hot and
              cold • Blocking sound • Sleep • Food • Water
            </p>
          </div>
        </div>

        <div className="button">
          <button>{path === '/progress' ? "DOWNLOAD" : "INVITE"}</button>
        </div>
        <Link to="/progress" className="ss">
          <button className={path === '/profile' &&  "sum_buton"}>
            {path === "/progress" ? "PRINT SUMMARY" : "SUMMARY"}
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .date {
    display: flex;
    justify-content: start;
    align-items: center;
    span {
      text-align: left;
      font: normal normal normal 14px/14px Poppins;
      letter-spacing: 0px;
      color: #2699fb;
      opacity: 1;
      margin-right: 4px;
    }
    p {
      font: normal normal normal 12px/14px Arial;
      letter-spacing: 0px;
      color: #4f4f4f;
      opacity: 1;
    }
  }

  .profile_info {
    h2 {
      font: normal normal normal 16px/24px Arial;
      letter-spacing: 0px;
      color: #2699fb;
      margin-top: 16px;
    }
    .loca {
      background: #f1f9ff 0% 0% no-repeat padding-box;
      border: 1px solid #f1f9ff;
      opacity: 1;
      width: 100%;
      height: 53px;
      padding: 10px 11px;
      margin-top: 5px;
      P {
        font: normal normal normal 12px/14px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
        width: 228px;
      }
    }
  }

  .ptofile_invi_intro {
    background: #f1f9ff 0% 0% no-repeat padding-box;
    border: 1px solid #f1f9ff;
    opacity: 1;
    width: 100%;
    /* height: 57px; */
    padding: 6px 11px 10px 10px;
    margin-top: 10px;
    h4 {
      font: normal normal bold 12px/24px Poppins;
      letter-spacing: 0px;
      color: #000000;
    }
    P {
      font: normal normal normal 12px/14px Arial;
      letter-spacing: 0px;
      color: #4f4f4f;
      width: 262px;
    }
  }

  .button {
    display: flex;
    flex-direction: column;
    align-items: end;
    button {
      width: 100%;
      height: 39px;
      background: #f1f9ff 0% 0% no-repeat padding-box;
      border-radius: 20px;
      text-align: center;
      font: normal normal bold 14px/17px Arial;
      letter-spacing: 0px;
      color: #2699fb;
      border: none;
      outline: none;
      margin-top: 20px;
      cursor: pointer;
    }
  }

  button {
    width: 100%;
    height: 39px;
    background: #2699fb 0% 0% no-repeat padding-box;
    border-radius: 20px;
    text-align: center;
    font: normal normal bold 14px/17px Arial;
    letter-spacing: 0px;
    color: #ffffff;
    border: none;
    outline: none;
    margin-top: 20px;
    cursor: pointer;
  }
  .sum_buton {
    animation: pulse 1.2s ease infinite;
  }
  button:hover {
    animation: none;
  }
`;

export default ProfileInfoMob;
