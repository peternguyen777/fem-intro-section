import React, { useState } from "react";
import Header from "./components/Header";
import Logos from "./components/Logos";

import imageMobile from "./images/image-hero-mobile.png";
import imageDesktop from "./images/image-hero-desktop.png";
import MenuMobile from "./components/MenuMobile";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClickHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <body>
      {/* Header */}
      {menuOpen && <MenuMobile onClick={menuClickHandler} />}
      <Header menuClick={menuClickHandler} />

      {/* Image */}
      <main>
        <img className='lg:hidden mb-[48px]' src={imageMobile} alt='' />
        <div className='flex lg:flex-row lg:mt-[68px] lg:justify-between lg:mx-auto lg:mb-[130px] lg:max-w-[1145px]'>
          <div className='flex flex-col items-center mx-[16px] text-center lg:text-left lg:ml-0 lg:justify-between lg:mr-0'>
            <div className='lg:w-[540px] lg:mt-[104px]'>
              <h1 className='text-4xl font-bold mb-[28px] font-epilogue lg:text-7xl lg:mb-[68px]'>
                Make <span className='lg:inline-block'>remote work</span>
              </h1>

              <p className='text-base mb-[24px] font-epilogue font-normal text-gray-500 lg:w-[445px] lg:mb-[60px]'>
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>

              <button className=' h-[48px] w-[136px] bg-black text-white rounded-xl text-base font-normal font-epilogue hover:bg-white hover:text-black hover:border-2 hover:border-black '>
                Learn more
              </button>
            </div>

            {/* Logos */}
            <Logos />
          </div>
          <img
            className='hidden lg:inline-block'
            src={imageDesktop}
            alt=''
            height='640'
            width='480'
          />
        </div>
      </main>
    </body>
  );
}

export default App;
