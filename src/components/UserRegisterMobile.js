import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/Manage-Autism-Logo.svg";
import LandingFooterMob from "./Footers/LandingFooterMob";
import Hero from "./Hero";

const UserRegisterMobile = () => {
  const emailSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <div className="container">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <Hero />
      </div>
      <div className="videoImgWrap">
        <div className="videoContainer">
          <iframe
            width="100%"
            height="340"
            src="https://www.youtube.com/embed/FGTcXAgzxWw"
            title="Signs of Autism in Children"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="subscribeSec">
        <div className="container">
          <div className="subsWrap">
            <p>Subscribe to our weekly news & updates</p>
            <form className="contact-form" onSubmit={emailSubmit}>
              <input
                type="email"
                className="form-input"
                placeholder="Email Address"
                name="_replyto"
              />
              <button className="submit-btn" type="submit">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
      <LandingFooterMob />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .logo {
    width: 107px;
    height: 33px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .videoImgWrap {
    position: relative;
    width: 100%;
    height: 280px;
    overflow: hidden !important;
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    .videoContainer {
      width: 100%;
      height: 100%;
      iframe {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .subscribeSec {
    background: #f1f9ff 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 40px 0px;
    .subsWrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        text-align: left;
        font: normal normal normal 16px/18px Arial;
        letter-spacing: 0px;
        color: #2699fb;
        opacity: 1;
        width: 290px;
      }
      form {
        margin-top: 18px;
        input {
          background: #ffffff 0% 0% no-repeat padding-box;
          opacity: 1;
          width: 160px;
          height: 40px;
          border: none;
          outline: none;
          padding: 13px 18px;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }
        button {
          background: #2699fb 0% 0% no-repeat padding-box;
          opacity: 1;
          width: 122px;
          height: 40px;
          text-align: center;
          font: normal normal bold 14px/12px Arial;
          letter-spacing: 0px;
          color: #ffffff;
          opacity: 1;
          border: none;
          outline: none;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 414px) and (min-width: 220px) {
    .videoImg {
      width: 100% !important;
      height: 240px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default UserRegisterMobile;
