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
        <div className='lg:ml-[165px] lg:mr-[130px] flex lg:flex-row lg:mt-[68px]'>
          <div className='flex flex-col items-center mx-[16px] text-center lg:items-start lg:text-left lg:mx-0'>
            <div className='lg:h-[400px] '>
              <h1 className='text-4xl font-bold mb-[28px] container font-epilogue lg:text-7xl'>
                Make remote work
              </h1>

              <p className='text-base mb-[24px] font-epilogue container font-normal text-gray-500'>
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>

              <button className='mb-[48px] h-[48px] w-[136px] bg-black text-white rounded-xl text-base font-normal font-epilogue hover:bg-white hover:text-black hover:border-2 hover:border-black'>
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
