import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footers/Footer";
import data from "../data/data.json";
import close from "../images/close.svg";
import logo from "../images/Manage-Autism-Logo.svg";

const Testimonial = () => {
  return (
    <Wrapper>
      <div className="main">
        <div className="navWrapper ">
          <div className="nav_wrap">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="menu">
            <div className="menu_wrap">
              <Link to="/">
                <img src={close} alt="close" />
              </Link>
            </div>
          </div>
        </div>
        <div className="navContainer container">
          <div className="testimo_wrap">
            <h1>Testimonial</h1>
            <div className="testimonial">
              {data.testimonial.map(({ id, title, description, marking }) => (
                <div className="testimonial_single" key={id}>
                  <div className="title">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>

                  <h2>{marking}</h2>
                </div>
              ))}
              <div className="testimonial_navigat">
                <p>View more Testimonial...…………………1,2,3....15</p>
              </div>
            </div>
          </div>
          <button>Add Testimonial</button>
        </div>
      </div>
      <div className="footer_desk">
        <Footer />
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
      .logo {
        width: 260px;
        height: 81px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .menu {
      width: 80%;
      .menu_wrap {
        width: 1200px;
        margin: 0 auto;
        justify-content: end;
        display: flex;

        img {
          cursor: pointer;
        }
      }
    }
  }

  .main {
    height: 100vh;
  }
  .testimo_wrap {
    background: #f1f9ff 0% 0% no-repeat padding-box;
    opacity: 1;
    margin: 40px 0 30px 0;
    h1 {
      padding: 29px 115px;
      font: normal normal bold 40px/45px Arial;
      letter-spacing: 0px;
      color: #4f4f4f;
    }
    .testimonial {
      width: 1082px;
      margin: 0 auto;
    }
    .testimonial_single {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      .title {
        h3 {
          font: normal normal normal 20px/24px Arial;
          letter-spacing: 0px;
          color: #2699fb;
        }
        p {
          width: 873px;
          text-align: left;
          font: normal normal normal 16px/24px Arial;
          letter-spacing: 0px;
          color: #4f4f4f;
          margin: 10px 0 0 14px;
        }
      }
      h2 {
        font: normal normal bold 67px/54px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
      }
    }
  }
  .testimonial_navigat {
    width: 873px;
    text-align: end;
    display: block;
    p {
      font: normal normal normal 20px/24px Arial;
      letter-spacing: 0px;
      color: #4f4f4f;
      padding-bottom: 20px;
      cursor: pointer;
    }
  }

  button {
    display: none;
  }

  .footer_desk {
    display: block;
    height: 290px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 244px) {
    background: #f1f9ff 0% 0% no-repeat padding-box;
    height: 433px;
    width: 100%;
    .navWrapper {
      padding: 29px !important;
    }
    .nav_wrap {
      width: 0 !important;
      .logo {
        width: 107px !important;
        height: 33px !important;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .menu {
      width: 25px !important;
      .menu_wrap {
        width: 28px !important;
        height: 28px !important;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .testimo_wrap {
      background: #ffffff 0% 0% no-repeat padding-box !important;
      margin: -28px 0 30px 0 !important;
      padding: 0 10px;

      h1 {
        padding: 40px 0 0 0 !important;
        font: normal normal bold 30px/34px Arial !important;
      }
      .testimonial {
        width: 100% !important;
        margin-top: 26px;
      }
      .testimonial_single {
        align-items: start !important;
        .title {
          h3 {
            font: normal normal normal 20px/24px Arial;
            letter-spacing: 0px;
            color: #2699fb;
          }
          p {
            width: 108% !important;
            font: normal normal normal 16px/24px Arial;
          }
        }
        h2 {
          font: normal normal bold 29px/23px Arial !important;
        }
      }
    }
    .testimonial_navigat {
      display: none !important;
    }
    button {
      width: 100%;
      background: #2699fb 0% 0% no-repeat padding-box;
      border-radius: 20px;
      font: normal normal bold 14px/17px Arial;
      letter-spacing: 0px;
      color: #ffffff;
      height: 39px;
      outline: none;
      border: none;
      margin: 70px 10px;
      display: block !important;
    }

    .footer_desk {
      display: none;
    }
  }
`;

export default Testimonial;
