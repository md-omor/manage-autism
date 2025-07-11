import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footers/Footer";
import FooterMobile from "../components/Footers/FooterMobile";
import close from "../images/close.svg";
import logo from "../images/Manage-Autism-Logo.svg";

const SignUp = () => {
  return (
    <Wrapper>
      {/* <div className="container"> */}
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
      {/* </div> */}

      <div className="aboutCon container">
        <div className="aboutWrap">
          <div className="about_wrap_first">
            <h1>About You</h1>
            <div className="userInfoSingle">
              <p>First Name</p>
              <input
                type="text"
                className="form-input"
                placeholder="Anis"
                name="_replyto"
              />
            </div>
            <div className="userInfoSingle">
              <p>Surname</p>
              <input
                type="text"
                className="form-input"
                placeholder="Anis"
                name="_replyto"
              />
            </div>
            <div className="userInfoSingle">
              <p>Email Address</p>
              <input
                type="text"
                className="form-input"
                placeholder="Anis374@yahoo.co.uk"
                name="_replyto"
              />
            </div>
            <div className="userInfoSingle">
              <p>Confirm Email Address</p>
              <input
                type="text"
                className="form-input"
                placeholder="Anis374@yahoo.co.uk"
                name="_replyto"
              />
            </div>
            <div className="userInfoSingle">
              <p>Validate Email</p>
              <input
                type="text"
                className="form-input"
                placeholder="Anis"
                name="_replyto"
              />
            </div>
            <div className="userInfoSingle location">
              <p>Location</p>
              <select name="" className="minimal">
                <option value="USA">Please Select</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="CANADA">CANADA</option>
                <option value="SPAIN">SPAIN</option>
              </select>
            </div>
          </div>

          <h1>About the Patient</h1>
          <div className="userInfoSingle">
            <p>Childs Name with Autism</p>
            <input
              type="text"
              className="form-input"
              placeholder="Saleem Rah"
              name="_replyto"
            />
          </div>

          <div className="userInfoSingle location">
            <p>Childs Age</p>
            <select name="" className="minimal">
              <option value="USA">Please Select</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="CANADA">CANADA</option>
              <option value="SPAIN">SPAIN</option>
            </select>
          </div>

          <div className="userInfoSingle location">
            <p>Childs Diagnosis</p>
            <select name="" className="minimal">
              <option value="USA">Please Select</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="CANADA">CANADA</option>
              <option value="SPAIN">SPAIN</option>
            </select>
          </div>

          <div className="userInfoSingle location">
            <p>Any Treatment in Place?</p>
            <select name="" className="minimal">
              <option value="USA">Please Select</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="CANADA">CANADA</option>
              <option value="SPAIN">SPAIN</option>
            </select>
          </div>

          <div className="userInfoSingle location">
            <p>How many Professionals look after your Child/ patient?</p>
            <select name="" className="minimal">
              <option value="USA">Please Select</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="CANADA">CANADA</option>
              <option value="SPAIN">SPAIN</option>
            </select>
          </div>

          <div className="userInfoSingle">
            <p>Do you have any carers, cares for your Child/ Patient?</p>
            <span>Private</span>
            <span>Local Authorities</span>
          </div>

          <div className="userInfoSingle location">
            <p>
              How much money in average monthly spent on Child/ Patient
              treatment.
            </p>
            <h6>
              Eg private, medicine, therapies, activities, carer and electronics
            </h6>
            <select name="" className="minimal">
              <option value="USA">Please Select</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="CANADA">CANADA</option>
              <option value="SPAIN">SPAIN</option>
            </select>
          </div>

          <div className="quesWrapLeft">
            <h1>Questions about this project</h1>
            <div className="userInfoSingle location">
              <p>What do you think about this Project</p>
              <select name="" className="minimal">
                <option value="USA">Please Select</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="CANADA">CANADA</option>
                <option value="SPAIN">SPAIN</option>
              </select>
            </div>
            <div className="userInfoSingle location">
              <p>What do you think about the design</p>
              <select name="" className="minimal">
                <option value="USA">Please Select</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="CANADA">CANADA</option>
                <option value="SPAIN">SPAIN</option>
              </select>
            </div>

            <div className="userInfoSingle location">
              <p>Would you use this service</p>
              <select name="" className="minimal">
                <option value="USA">Please Select</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="CANADA">CANADA</option>
                <option value="SPAIN">SPAIN</option>
              </select>
            </div>

            <div className="userInfoSingle">
              <p>What do you like about this service the most?</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="I love ….."
              ></textarea>
            </div>

            <div className="userInfoSingle">
              <p>What do you dislike about this service the most?</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="I love ….."
              ></textarea>
            </div>

            <div className="userInfoSingle">
              <p>
                How will this app help you, what does it mean for you and your
                child/Patient
              </p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="I love ….."
              ></textarea>
            </div>

            <div className="userInfoSingle">
              <p>
                Is there anything else important to you and your child you would
                like us to add to this project.
              </p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="I love ….."
              ></textarea>
            </div>

            <div className="userInfoSingle location">
              <p>How much are you willing to pay for this service.</p>
              <select name="" className="minimal">
                <option value="USA">Please Select</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="CANADA">CANADA</option>
                <option value="SPAIN">SPAIN</option>
              </select>
            </div>
            <div className="userInfoSingle location">
              <p>Would you recommend this app</p>
              <select name="" className="minimal">
                <option value="USA">Please Select</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="CANADA">CANADA</option>
                <option value="SPAIN">SPAIN</option>
              </select>
            </div>

            <div className="rating">
              <p>Rate this App</p>
              <div className="check">
                <label for="vehicle1"> 1</label>
                <input
                  type="checkbox"
                  name="vehicle1"
                  value="Bike"
                  className="checkbox"
                />
                <br />
                <label for="vehicle2"> 2</label>
                <input
                  type="checkbox"
                  name="vehicle2"
                  value="Car"
                  className="checkbox"
                />
                <br />
                <label for="vehicle2"> 3</label>
                <input
                  type="checkbox"
                  name="vehicle2"
                  value="Car"
                  className="checkbox"
                />
                <br />
                <label for="vehicle3"> 4</label>
                <input
                  type="checkbox"
                  name="vehicle3"
                  value="Boat"
                  className="checkbox"
                />
                <br />
                <label for="vehicle3"> 5</label>
                <input
                  type="checkbox"
                  name="vehicle3"
                  value="Boat"
                  className="checkbox"
                />
              </div>
            </div>

            <Link to="/emailconfirm" className="submit_btn">
              <button>Submit</button>
            </Link>
          </div>
        </div>
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

  .aboutCon {
    width: 970px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 103.79px;
    margin-bottom: 50px;
    .about_wrap_first {
      margin-bottom: 100px;
    }

    h1 {
      text-align: left;
      font: normal normal bold 30px/34px Arial;
      letter-spacing: 0px;
      color: #4f4f4f;
      opacity: 1;
      margin-bottom: 33.41px;
    }

    .quesWrapLeft {
      margin-top: 90px;

      .submit_btn {
        width: 388px;
        text-align: center;
        button {
          background: #2699fb 0% 0% no-repeat padding-box;
          border-radius: 20px;
          font: normal normal bold 14px/17px Arial;
          letter-spacing: 0px;
          color: #ffffff;
          width: 286px;
          height: 39px;
          cursor: pointer;
          outline: none;
          border: none;
          margin: 93px 0 0 50px;
          animation: pulse 1.2s ease infinite;
        }
        button:hover {
          animation: none;
        }
      }
    }

    .userInfoSingle {
      margin-bottom: 31.41px;
      p {
        text-align: left;
        font: normal normal normal 20px/24px Arial;
        letter-spacing: 0px;
        color: #2699fb;
        opacity: 1;
        width: 383px;
      }
      h6 {
        text-align: left;
        font: normal normal normal 14px/14px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
        opacity: 1;
        margin: 5px 0 14px 0;
      }
      span {
        display: block;
        font: normal normal normal 16px/24px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
        opacity: 1;
        margin-top: 2px;
      }
      input {
        background: #f1f9ff 0% 0% no-repeat padding-box;
        border: 1px solid #f1f9ff;
        opacity: 1;
        padding: 0 14.63px;
        width: 418px;
        height: 34px;
        margin-top: 5px;
        border: none;
        outline: none;
      }
      select {
        background: #f1f9ff 0% 0% no-repeat padding-box;
        border: 1px solid #f1f9ff;
        opacity: 1;
        padding: 0 14.63px;
        width: 418px;
        height: 34px;
        margin-top: 5px;
        border: none;
        outline: none;
        -webkit-appearance: none;
        font: normal normal normal 16px/24px Arial;
        color: #4f4f4f;

        option {
          background-color: #fff;
          text-align: left;
          font: normal normal normal 16px/24px Arial;
          letter-spacing: 0px;
          color: #4f4f4f;
          opacity: 1;
        }
      }

      textarea {
        width: 418px;
        height: 163px;
        text-align: left;
        font: normal normal bold 16px/24px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
        background: #f1f9ff 0% 0% no-repeat padding-box;
        border: 1px solid #f1f9ff;
        opacity: 1;
        outline: none;
        margin-top: 10px;
        padding: 0 14px;
      }

      select.minimal {
        background-image: linear-gradient(45deg, transparent 50%, #2699fb 50%),
          linear-gradient(135deg, #2699fb 50%, transparent 50%);
        background-position: calc(100% - 20px) calc(1em + 2px),
          calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 1.5em;
        background-repeat: no-repeat;
      }

      select.minimal:focus {
        background-image: linear-gradient(45deg, #2699fb 50%, transparent 50%),
          linear-gradient(135deg, transparent 50%, #2699fb 50%),
          linear-gradient(to right, #2699fb, #2699fb);
        background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
          calc(100% - 2.5em) 0.5em;
        background-size: 5px 5px, 5px 5px, 1px 1.5em;
        background-repeat: no-repeat;
        outline: 0;
      }

      select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
      }
    }
    .rating {
      p {
        text-align: left;
        font: normal normal normal 20px/24px Arial;
        letter-spacing: 0px;
        color: #2699fb;
        opacity: 1;
        width: 383px;
      }
      .check {
        text-align: center;
        width: 235px;
        margin-top: 25px;
        label {
          text-align: left;
          font: normal normal normal 18px/24px Arial;
          letter-spacing: 0px;
          color: #2699fb;
          opacity: 1;
          margin-right: 26px;
        }
        input {
          background: #2699fb 0% 0% no-repeat padding-box !important;
          opacity: 1;
          margin-top: 5px;
        }
      }
    }
  }

  .footer_desk {
    display: block;
  }
  .footerM_mob {
    display: none;
  }

  @media only screen and (max-width: 1024px) and (min-width: 244px) {
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
    .aboutWrap {
      margin-bottom: 70px;
    }
    .container {
      padding: 0px 29px;
    }
    .aboutCon {
      h1 {
        font: normal normal bold 24px/28px Arial !important;
      }
    }

    .userInfoSingle {
      margin-bottom: 31.41px;
      p {
        width: 266px !important;
        font: normal normal normal 16px/24px Arial !important;
      }
      h6 {
        font: normal normal normal 12px/14px Arial !important;
      }
      span {
        display: block;
        font: normal normal normal 14px/24px Arial !important;
      }
      input {
        width: 100% !important;
      }
      select {
        width: 100% !important;
      }
      textarea {
        width: 100% !important;
      }
    }
    .about_wrap_first {
      margin-bottom: 40px !important;
    }
    .quesWrapLeft {
      margin-top: 20px !important;
    }

    .rating {
      p {
        width: 100% !important;
        font: normal normal normal 16px/24px Arial !important;
      }
    }

    button {
      font: normal normal bold 14px/17px Arial;
      margin: 60px 0 0 0 !important;
      width: 100% !important;
    }

    .footer_desk {
      display: none;
    }
    .footerM_mob {
      display: block;
    }
  }
`;

export default SignUp;
