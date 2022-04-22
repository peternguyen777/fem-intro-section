import React from "react";
import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";

const Header = (props) => {
  return (
    <header className='flex justify-between items-center m-[16px] mb-[24px] h-[35px]'>
      <img src={logo} alt='' width='87' height='35' />
      <img
        className='md:hidden'
        src={iconMenu}
        alt=''
        width='32'
        height='18'
        onClick={props.onClick}
      />
    </header>
  );
};

export default Header;
