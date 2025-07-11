import React from "react";
import styled from "styled-components";
import UserRegister from "../components/UserRegister";
import UserRegisterMobile from "../components/UserRegisterMobile";

const Home = () => {
  return (
    <Wrapper>
      <div className="userRegisters">
        <UserRegister />
      </div>

      <div className="userRegisterMobile">
        <UserRegisterMobile />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  .userRegisters {
    display: block;
  }
  .userRegisterMobile {
    display: none;
  }

  @media only screen and (max-width: 1024px) and (min-width: 244px) {
    .userRegisters {
      display: none;
    }
    .userRegisterMobile {
      display: block;
    }
  }
`;

export default Home;
