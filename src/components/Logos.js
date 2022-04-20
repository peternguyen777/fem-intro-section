import React from "react";
import logoAudiophile from "../images/client-audiophile.svg";
import logoDatabiz from "../images/client-databiz.svg";
import logoMaker from "../images/client-maker.svg";
import logoMeet from "../images/client-meet.svg";

const Logos = () => {
  return (
    <div className='flex flew-row items-center w-[343px] justify-between mb-[94px]'>
      <img src={logoDatabiz} alt='' width='80' />
      <img src={logoAudiophile} alt='' width='52' />
      <img src={logoMeet} alt='' width='64' />
      <img src={logoMaker} alt='' width='59' />
    </div>
  );
};

export default Logos;
