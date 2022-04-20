import React from "react";
import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";

const Header = () => {
  return (
    <header className='flex justify-between items-center m-[16px] mb-[24px] h-[35px]'>
      <img src={logo} alt='' width='87' height='35' />
      <img src={iconMenu} alt='' width='32' height='18' />
    </header>
  );
};

export default Header;
