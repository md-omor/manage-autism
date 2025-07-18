import styled from "styled-components";
import MainProfile from "../components/MainProfile/MainProfile";
import MainProfileMob from "../components/MainProfile/MainProfileMob";

const Profile = () => {
  return (
    <Wrapper>
      <div className="main_profile_desk">
        <MainProfile />
      </div>
      <div className="main_profile_mob">
        <MainProfileMob />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main_profile_mob {
    display: none;
  }
  .main_profile_desk {
    display: block;
  }
  @media only screen and (max-width: 1024px) and (min-width: 244px) {
    .main_profile_desk {
      display: none;
    }
    .main_profile_mob {
      display: block;
    }
  }
`;

export default Profile;
