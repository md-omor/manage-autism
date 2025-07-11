import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/Manage-Autism-Logo.svg";

const Navbar = () => {
  return (
    <Wrapper className="nav">
      {/* <div className="navContainer"> */}
      <div className="navWrapper">
        <Link to="/" className="nav_wrap">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <div className="menu">
          <div className="menu_wrap">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contacts</li>
              <Link to="/testimonial">
                <li>Testimonial</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .navWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    .logo {
      width: 260px;
      height: 81px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media only screen and (max-width: 1565px) and (min-width: 1166px) {
    .navWrapper {
      width: 100%;
      margin: 0 auto;
      /* padding-left: 30px;
      padding-right:30px; */
    }
  }

  .nav_wrap {
    width: 20%;
    text-align: -webkit-right;
  }
  .menu {
    width: 80%;
    justify-content: end;
  }
  .menu_wrap {
    display: flex;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
    justify-content: end;
    ul {
      display: flex;
      align-items: center;
      li {
        margin-right: 66px;
        font: normal normal bold 20px/12px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
        opacity: 1;
        cursor: pointer;
      }
    }
  }
`;

export default Navbar;
