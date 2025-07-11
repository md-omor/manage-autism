import React, { useEffect, useState } from "react";
import styled from "styled-components";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";

const Footer = () => {
  const [year, setyear] = useState();
  useEffect(() => {
    const fullYear = new Date().getFullYear();
    setyear(fullYear);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper className="footer">
      <div className="userContainer">
        <div className="footerTop">
          <div className="footerTopRight">
            <div className="footterInfoSignle">
              <span> +44 7534 973 928</span>
              <span> Info@manageautism.com</span>
              <span> 152-160 Kemp House,</span>
              <span> City Road,</span>
              <span> EC14 9PU</span>
            </div>

            <div className="footterInfoSignle">
              <span>About Us</span>
              <span>Contact Us</span>
              <span>FAQ</span>
              <span>Notifications</span>
              <span>Feedback</span>
            </div>

            <div className="footterInfoSignle">
              <span>Work with us </span>
              <span> Privacy Policy</span>
              <span> Terms & Conditions</span>
              <span> Press Enquiries</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footer_container">
          <div className="footerBottomWrapper">
            <div className="footerBottomLeft">
              <p>© Manage Autism Ltd {year}</p>
            </div>
            <div className="footerBottomRight">
              <div className="footerImg">
                <img src={instagram} alt="instagram" />
              </div>
              <div className="footerImg">
                <img src={twitter} alt="twitter" />
              </div>
              <div className="footerImg">
                <img src={facebook} alt="facebook" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: #f1f9ff 0% 0% no-repeat padding-box;
  opacity: 1;

  .footerTop {
    padding: 40px 0px;
  }
  .footerTop {
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .footerTopLeft {
    p {
      text-align: left;
      font: normal normal normal 16px/18px Arial;
      letter-spacing: 0px;
      color: #2699fb;
      opacity: 1;
      margin-bottom: 18px;
    }
  }

  .form-input {
    border: none;
    outline: none;
    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 1;
    width: 230px;
    height: 40px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding-left: 18px;
  }
  .submit-btn {
    background: #2699fb 0% 0% no-repeat padding-box;
    opacity: 1;
    font: normal normal bold 14px/12px Arial;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    border: none;
    outline: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 126px;
    height: 40px;
    cursor: pointer;
  }
  .form-input::placeholder {
    font: normal normal normal 12px/12px Arial;
    letter-spacing: 0px;
    color: #4f4f4f;
    opacity: 0.44;
  }

  .footerTopRight {
    display: flex;
  }
  .footterInfoSignle {
    display: flex;
    flex-direction: column;
    margin-left: 131px;
    font: normal normal bold 14px/30px Arial;
    letter-spacing: 0px;
    color: #4f4f4f;
    opacity: 1;
  }

  .footerBottom {
    background: #2699fb 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 20px 0;
    .footerBottomWrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .footerBottomLeft {
      p {
        font: normal normal normal 10px/20px Arial;
        letter-spacing: 0px;
        color: #ffffff;
        opacity: 1;
      }
    }
    .footerBottomRight {
      display: flex;
      align-items: center;
      justify-content: center;
      .footerImg {
        width: 14px;
        height: 14px;
        margin-left: 30px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) and (min-width: 315px) {
    /* .container {
      margin-top: 50px !important;
    } */
    .footerTop {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }

    .footerTopRight {
      display: flex;
      flex-wrap: wrap;
      margin-top: 59px;
    }
    .footterInfoSignle {
      display: flex;
      flex-direction: column;
      margin: 10px 12px 10px 0px !important;
      font: normal normal bold 10px/16px Arial;
    }

    .form-input {
      width: 210px;
      height: 40px;
    }
    .submit-btn {
      width: 114px;
      height: 40px;
    }
  }
`;

export default Footer;
