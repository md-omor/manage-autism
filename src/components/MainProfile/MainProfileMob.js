import React from "react";
import ProfileChartMob from "../Charts/ProfileChartMob";
import FooterMobile from "../Footers/FooterMobile";
import ProfileNavbarMob from "../Navbars/ProfileNavbarMob";
import ProfileInfoMob from "../ProfileInfo/ProfileInfoMob";
import ProfileSlide from "../ProgressSlides/ProfileSlide";

const MainProfileMob = () => {
  return (
    <>
      <ProfileNavbarMob />
      <ProfileInfoMob />
      <ProfileChartMob />
      <ProfileSlide />
      <FooterMobile />
    </>
  );
};

export default MainProfileMob;
