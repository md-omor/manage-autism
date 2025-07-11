import React, { useState } from "react";
import styled from "styled-components";
import AllLogMob from "../AllButtonLog/AllLogMob";
import FoodLogMob from "../FoodLog/FoodLogMob";
import FooterMobile from "../Footers/FooterMobile";
import ProfileNavbarMob from "../Navbars/ProfileNavbarMob";

const CreateLogFoodMob = () => {
  const [createLog, setcreateLog] = useState(1);

  return (
    <Wrapper>
      <ProfileNavbarMob />
      <AllLogMob setcreateLog={setcreateLog} createLog={createLog} />
      <FoodLogMob />
      <FooterMobile />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default CreateLogFoodMob;
