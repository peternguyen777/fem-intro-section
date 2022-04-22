import React, { useState } from "react";
import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import iconArrowUp from "../images/icon-arrow-up.svg";
import iconArrowDown from "../images/icon-arrow-down.svg";
import HeaderFeaturesDropdown from "./HeaderFeaturesDropdown";
import HeaderCompanyDropdown from "./HeaderCompanyDropdown";

const Header = (props) => {
  const [featuresMenu, setFeaturesMenu] = useState(false);
  const [companyMenu, setCompanyMenu] = useState(false);

  const featuresExpandHandler = () => {
    setFeaturesMenu(true);
    setCompanyMenu(false);
  };

  const companyExpandHandler = () => {
    setCompanyMenu(true);
    setFeaturesMenu(false);
  };

  const removeMenuHandler = () => {
    setCompanyMenu(false);
    setFeaturesMenu(false);
  };

  return (
    <header className='flex font-normal font-epilogue justify-between items-center m-[16px] mb-[24px] h-[35px] md:h-[42px] md:mx-[40px] md:mt-[20px]'>
      <div className='flex'>
        <img src={logo} alt='' width='87' height='35' />
        <div className='hidden ml-[60px] space-x-[40px] text-gray-600 md:flex'>
          <div
            className='flex justify-end'
            onMouseOver={featuresExpandHandler}
            onMouseLeave={removeMenuHandler}
            onClick={removeMenuHandler}
          >
            <div className='flex flex-row items-start space-x-[8px] cursor-pointer '>
              <h2 className='hover:text-black z-10'>Features</h2>
              {featuresMenu ? (
                <img
                  className='relative mt-[8px]'
                  src={iconArrowDown}
                  alt=''
                  width='12'
                />
              ) : (
                <img
                  className='relative mt-[8px]'
                  src={iconArrowUp}
                  alt=''
                  width='12'
                />
              )}
            </div>
            {featuresMenu && <HeaderFeaturesDropdown />}
          </div>
          <div
            className='flex'
            onMouseOver={companyExpandHandler}
            onMouseLeave={removeMenuHandler}
            onClick={removeMenuHandler}
          >
            <div className='flex flex-row items-start space-x-[8px] cursor-pointer'>
              <h2 className='hover:text-black z-10'>Company</h2>
              {companyMenu ? (
                <img
                  className='relative mt-[8px]'
                  src={iconArrowDown}
                  alt=''
                  width='12'
                />
              ) : (
                <img
                  className='relative mt-[8px]'
                  src={iconArrowUp}
                  alt=''
                  width='12'
                />
              )}
            </div>
            {companyMenu && <HeaderCompanyDropdown />}
          </div>
          <h2 className='hover:text-black cursor-pointer'>Careers</h2>
          <h2 className='hover:text-black cursor-pointer'>About</h2>
        </div>
      </div>
      <div>
        <img
          className='md:hidden'
          src={iconMenu}
          alt=''
          width='32'
          height='18'
          onClick={props.menuClick}
        />
        <div className='hidden space-x-[40px] items-center text-gray-600 lg:flex '>
          <h2 className='hover:text-black cursor-pointer'>Login</h2>
          <button className='w-[104px] h-[42px] border-2 cursor-pointer rounded-xl border-gray-500 hover:text-black hover:border-black'>
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
