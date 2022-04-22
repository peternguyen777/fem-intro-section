import React from "react";
import logoAudiophile from "../images/client-audiophile.svg";
import logoDatabiz from "../images/client-databiz.svg";
import logoMaker from "../images/client-maker.svg";
import logoMeet from "../images/client-meet.svg";

const Logos = () => {
  return (
    <div className='flex items-center mt-[48px] mb-[94px] container justify-between lg:justify-start lg:space-x-reverse lg:space-x-[40px] lg:h-[28px] lg:mt-0 lg:mb-0'>
      <img className='lg:hidden' src={logoDatabiz} alt='' width='80' />
      <img className='lg:hidden' src={logoAudiophile} alt='' width='52' />
      <img className='lg:hidden' src={logoMeet} alt='' width='64' />
      <img className='lg:hidden' src={logoMaker} alt='' width='59' />
      <img
        className='hidden lg:inline-block'
        src={logoDatabiz}
        alt=''
        height='28'
      />
      <img
        className='hidden lg:inline-block'
        src={logoAudiophile}
        alt=''
        height='28'
      />
      <img
        className='hidden lg:inline-block'
        src={logoMeet}
        alt=''
        height='28'
      />
      <img
        className='hidden lg:inline-block'
        src={logoMaker}
        alt=''
        height='28'
      />
    </div>
  );
};

export default Logos;
