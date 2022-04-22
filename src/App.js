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
    <div>
      {/* Header */}
      {menuOpen && <MenuMobile onClick={menuClickHandler} />}
      <Header onClick={menuClickHandler} />

      {/* Image */}

      <img className='md:hidden mb-[48px]' src={imageMobile} alt='' />
      <img className='hidden md:inline-block' src={imageDesktop} alt='' />

      <div className='flex flex-col items-center mx-[16px] text-center'>
        <h1 className='text-4xl font-bold mb-[28px] container  font-epilogue'>
          Make remote work
        </h1>

        <p className='text-base mb-[24px] font-epilogue container font-normal text-gray-500'>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>

        <button className='mb-[48px] h-[48px] w-[136px] bg-black text-white rounded-xl text-base font-normal font-epilogue hover:bg-white hover:text-black hover:border-2 hover:border-black'>
          Learn more
        </button>

        {/* Logos */}
        <Logos />
      </div>
    </div>
  );
}

export default App;
