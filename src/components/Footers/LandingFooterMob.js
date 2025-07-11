import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";

const LandingFooterMob = () => {
  const [year, setyear] = useState();
  useEffect(() => {
    const fullYear = new Date().getFullYear();
    setyear(fullYear);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <div className="footerTop">
        <div className="container">
          <div className="footerTopWrap">
            <div className="footerinfoSingle">
              <span> +44 7534 973 928</span>
              <span> Info@manageautism.com</span>
              <span>152-160 Kemp House, </span>
              <span> City Road, </span>
              <span> EC14 9PU</span>
            </div>
            <div className="footerinfoSingle">
              <span>About Us</span>
              <span>Help</span>
              <Link to="/testimonial">
                <span>Testimonial</span>
              </Link>
              <span>Work with us</span>
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="container">
          <div className="footerBotWrap">
            <div className="footerBotLeft">
              <p>© Manage Autism Ltd {year}</p>
            </div>
            <div className="footerBotRight">
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

const Wrapper = styled.div`
  border-top: 1px solid #f1f9ff;

  .container {
    padding: 0px 29px !important;
  }
  .footerTop {
    padding: 19px 0px;
    .footerTopWrap {
      display: flex;
      justify-content: space-between;
      .footerinfoSingle {
        display: flex;
        flex-direction: column;
        span {
          font: normal normal bold 14px/30px Arial;
          letter-spacing: 0px;
          color: #4f4f4f;
          opacity: 1;
        }
      }
      .footerinfoSingle:nth-child(2) {
        text-align: right;
      }
    }
  }
  .footerBottom {
    background: #2699fb 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 20px 0px;
    .footerBotWrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        text-align: right;
        font: normal normal normal 10px/20px Arial;
        letter-spacing: 0px;
        color: #ffffff;
        opacity: 1;
      }
      .footerBotRight {
        display: flex;
        justify-content: center;
        align-items: center;
        .footerImg {
          margin-left: 30px;
        }
      }
    }
  }
`;

export default LandingFooterMob;
