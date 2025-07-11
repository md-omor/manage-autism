import React from "react";
import styled from "styled-components";
import SignInDes from "../components/SignInDes";
import SignInMobile from "../components/SignInMobile";

const SignIn = () => {
  return (
    <Wrapper>
      <div className="signInDes">
        <SignInDes />
      </div>
      <div className="signInMob">
        <SignInMobile />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .signInDes {
    display: block;
    width: 99vw;
  }
  .signInMob {
    display: none;
  }

  @media only screen and (max-width: 1024px) and (min-width: 244px) {
    .signInDes {
      display: none;
    }
    .signInMob {
      display: block;
    }
  }
`;

export default SignIn;
