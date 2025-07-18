import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footers/Footer";
import FooterMobile from "../components/Footers/FooterMobile";
import logo from "../images/Manage-Autism-Logo.svg";

const EmailConfirm = () => {
  return (
    <Wrapper>
      <div className="navWrapper ">
        <Link to="/" className="nav_wrap navWrapMob ">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
      </div>

      <div className="email_confirm ">
        <div className="userContainer container">
          <div className="email_confirm_warp">
            <h2>Thank you for subscribing to Manage Autism</h2>
            <p>
              Before we get started, please take a second to make sure we’ve got
              your email right.
            </p>
            <Link to="/profile">
              <button>Confirm Email</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="userContainer container">
        <p className="news_up">We will send you weekly news and updates…</p>
      </div>
      <div className="footer_desk">
        <Footer />
      </div>
      <div className="footerM_mob">
        <FooterMobile />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .navWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    .nav_wrap {
      width: 20%;
      text-align: -webkit-right;
    }
    .logo {
      width: 260px;
      height: 81px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .email_confirm {
    background: #f1f9ff 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-top: 126px;
    padding-top: 45px;
    padding-bottom: 39px;
    .email_confirm_warp {
      h2 {
        width: 550px;
        text-align: left;
        font: normal normal bold 40px/45px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
        opacity: 1;
      }
      p {
        width: 309px;
        text-align: left;
        font: normal normal normal 20px/23px Arial;
        letter-spacing: 0px;
        color: #2699fb;
        opacity: 1;
        margin-top: 23px;
      }
      button {
        font: normal normal bold 18px/17px Arial;
        letter-spacing: 0px;
        color: #ffffff;
        opacity: 1;
        background: #2699fb 0% 0% no-repeat padding-box;
        border-radius: 20px;
        width: 286px;
        height: 39px;
        border: none;
        outline: none;
        cursor: pointer;
        margin-top: 44px;
        animation: pulse 1.2s ease infinite;
      }
      button:hover {
        animation: none;
      }
    }
  }
  .news_up {
    text-align: left;
    font: normal normal normal 20px/24px Arial;
    letter-spacing: 0px;
    color: #4f4f4f;
    opacity: 1;
    margin-top: 17px;
    margin-bottom: 183px;
  }

  .footer_desk {
    display: block;
  }
  .footerM_mob {
    display: none;
  }

  @media only screen and (max-width: 1024px) and (min-width: 244px) {
    .navWrapper {
      width: 100% !important;
      margin: 0 auto !important;
      padding: 29px !important;
      overflow: hidden !important;
    }
    .navWrapMob {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100% !important;

      .logo {
        width: 107px !important;
        height: 33px !important;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .email_confirm {
      margin-top: 56px !important;
      padding-top: 0 !important;
    }

    .email_confirm_warp {
      h2 {
        width: 226px !important;
        font: normal normal bold 30px/34px Arial !important;
      }
      p {
        width: 285px !important;
        font: normal normal normal 16px/18px Poppins !important;
      }
      button {
        width: 148px !important;
        height: 30px !important;
        font: normal normal bold 11px/14px Poppins !important;
        margin-top: 39px !important;
        animation: pulse 1.2s ease infinite;
      }
      button:hover {
        animation: none;
      }
    }
    .news_up {
      font: normal normal normal 12px/24px Poppins;
      margin-top: 0px;
    }
    .footer_desk {
      display: none;
    }
    .footerM_mob {
      display: block;
    }
  }
`;

export default EmailConfirm;
