import { Link } from "react-router-dom";
import styled from "styled-components";
import bgImg from "../images/caleb-woods-ecRuhwPIW7c-unsplash.svg";
import LandinPageFooter from "./Footers/LandinPageFooter";
import Navbar from "./Navbars/Navbar";

const UserRegister = () => {
  return (
    <>
      <Wrapper>
        <div className="userRegister">
          <Navbar />

          <div className="userContainer">
            <div className="userRegisterWrap">
              <div className="userRegisterLeft">
                <p>
                  {/* We help <span>manage</span> and <span>monitor</span> your{" "}
                  <span>child's healthcare </span> aiding{" "}
                  <span>industry professionals </span> for the{" "}
                  <span> best outcome</span> */}
                  Log, track your child's <span>daily chart</span>, manage
                  symptoms, share get <span>feedback</span> from experts and
                  forums, save
                  <span> time and money</span> on referrals, access to
                  information and links
                </p>

                <div className="registerBtnWrap">
                  <Link to="/signin" className="signin">
                    <button className="signin">Sign In</button>
                  </Link>
                  <Link to="/signup" className="signUp">
                    <button className="signUpBtn">Sign Up</button>
                  </Link>
                </div>
              </div>

              <div className="userRegisterRight">
                <div className="videoContainer">
                  <iframe
                    width="764"
                    height="346"
                    src="https://www.youtube.com/embed/FGTcXAgzxWw"
                    title="Signs of Autism in Children"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <LandinPageFooter />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .userRegister {
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
    width: 100%;
    padding-bottom: 50px;

    .userContainer {
      width: 1270px;
      margin: 0 auto;
      height: 90%;
      .userRegisterWrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
      }
    }
  }

  .userRegisterLeft {
    p {
      text-align: left;
      letter-spacing: 0px;
      opacity: 1;
      font: 30px/46px Rubik;
      letter-spacing: 0px;
      color: #4f4f4f;
      ${"" /* width: 429px; */}
      margin-right: 77px;
    }
    span {
      font: normal normal bold 29px/40px Rubik;
      letter-spacing: 0px;
      color: #000000;
    }
  }

  .userRegisterRight {
    position: relative;
    .videoContainer {
      width: 700px;
      height: 400px;
      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }

  .registerBtnWrap {
    display: flex;
    flex-direction: column;
    margin-top: 43.57px;

    .signin {
      background: #f1f9ff 0% 0% no-repeat padding-box;
      border-radius: 20px;
      opacity: 1;
      width: 276px;
      height: 39px;
      font: normal normal bold 16px/17px Arial;
      letter-spacing: 0px;
      color: #2699fb;
      opacity: 1;
      border: none;
      outline: none;
      cursor: pointer;
      box-shadow: 0 0 0 0 rgba(#5a99d4, 0.5) !important;
      animation: pulse 1.2s ease infinite;
    }

    .signin:hover {
      animation: none;
    }

    .signUp {
      width: 276px;
      button {
        border-radius: 20px;
        opacity: 1;
        width: 100%;
        height: 39px;
        letter-spacing: 0px;
        color: #ffffff;
        opacity: 1;
        border: none;
        outline: none;
        cursor: pointer;
        margin-top: 20.57px;
        font: normal normal bold 16px/17px Arial;
        background: #2699fb 0% 0% no-repeat padding-box;
        box-shadow: 0 0 0 0 rgba(#5a99d4, 0.5) !important;
        animation: pulse 1.2s ease infinite;
      }
      button:hover {
        animation: none;
      }
    }
  }
`;

export default UserRegister;
