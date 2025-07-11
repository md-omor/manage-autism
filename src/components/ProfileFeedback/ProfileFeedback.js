import React from "react";
import styled from "styled-components";

const ProfileFeedback = () => {
  return (
    <Wrapper>
      <div className="profile_container">
        <h1 className="prof_com_head">Comments and Feedback</h1>

        <div className="single_com">
          <div className="provide">
            <h4>GP: DR Ab.....</h4>
            <pre className="date">09/05/2021 | 12:30</pre>
          </div>
          <p>
            Aayan seems to be drinking plenty of water not sure why his hands
            and feets are itchy, we need to investigate further
          </p>
        </div>
        <div className="single_com">
          <div className="provide">
            <h4>NHS Gastrologist: Dr Anita</h4>

            <pre className="date">09/05/2021 | 12:30</pre>
          </div>
          <p>
            We will look into this further and get you booked in for
            consultation
          </p>
        </div>

        <div className="single_com">
          <div className="provide">
            <h4>Private Paediatric OT: Polly</h4>

            <pre className="date">09/05/2021 | 12:30</pre>
          </div>
          <p>
            Aayan seems to be drinking plenty of water not sure why his hands
            and feets are itchy, we need to investigate further
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
margin-bottom: 140px;
  .prof_com_head {
    letter-spacing: 0.24px;
    color: #131523;
    opacity: 1;
    font-family: "Poppins", sans-serif;
    margin-bottom: 10px;
  }
  .single_com {
    width: 100%;
    background: #cae5fc 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    padding: 21px 20px;
    margin-bottom: 20px;
    p {
        font: normal normal normal 19px/23px Arial;
        letter-spacing: 0px;
        color: #4f4f4f;
        opacity: 1;
        margin-top: 16px;
      }

    .provide {
      display: flex;
        justify-content: space-between;
      h4 {
        font: normal normal bold 20px/12px Arial;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
      }
     
    }

    .date {
        font: normal normal normal 16px/12px "Poppins";
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
    }
  }

  .single_com:nth-child(3) {
    background: #cafce3 0% 0% no-repeat padding-box;
  }
  .single_com:nth-child(4) {
    background: #F2FCCA 0% 0% no-repeat padding-box;ding-box;
  }
`;

export default ProfileFeedback;
