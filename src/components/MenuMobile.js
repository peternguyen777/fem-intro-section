import React, { useState } from "react";
import iconCloseMenu from "../images/icon-close-menu.svg";
import iconTodo from "../images/icon-todo.svg";
import iconCalendar from "../images/icon-calendar.svg";
import iconReminders from "../images/icon-reminders.svg";
import iconPlanning from "../images/icon-planning.svg";
import iconArrowUp from "../images/icon-arrow-up.svg";
import iconArrowDown from "../images/icon-arrow-down.svg";

const MenuMobile = (props) => {
  const [featuresMenu, setFeaturesMenu] = useState(false);
  const [companyMenu, setCompanyMenu] = useState(false);

  const featuresExpandHandler = () => {
    setFeaturesMenu(!featuresMenu);
  };

  const companyExpandHandler = () => {
    setCompanyMenu(!companyMenu);
  };

  return (
    <React.Fragment>
      <div className='fixed right-0 top-0 bg-white h-screen w-[240px] z-20 text-gray-600 text-base font-normal font-epilogue'>
        <img
          className='fixed top-[16px] right-[16px] md:hidden'
          src={iconCloseMenu}
          alt=''
          width='24'
          onClick={props.onClick}
        />

        <nav className='mt-[78px] ml-[24px] space-y-[24px]'>
          <div>
            <div
              className='flex flex-row items-center space-x-[16px] mb-[24px]'
              onClick={featuresExpandHandler}
            >
              <h2>Features</h2>
              {featuresMenu ? (
                <img src={iconArrowUp} alt='' height='6' width='12' />
              ) : (
                <img src={iconArrowDown} alt='' height='6' width='12' />
              )}
            </div>
            {featuresMenu && (
              <div className='space-y-[16px] ml-[24px]'>
                <div className='flex flex-row space-x-[16px] items-center'>
                  <img src={iconTodo} alt='' width='20' />
                  <p>Todo List</p>
                </div>
                <div className='flex flex-row space-x-[16px] items-center'>
                  <img src={iconCalendar} alt='' width='20' />
                  <p>Calendar</p>
                </div>
                <div className='flex flex-row space-x-[21px] items-center'>
                  <img src={iconReminders} alt='' width='15' />
                  <p>Reminders</p>
                </div>
                <div className='flex flex-row space-x-[16px] items-center'>
                  <img src={iconPlanning} alt='' width='20' />
                  <p>Planning</p>
                </div>
              </div>
            )}
          </div>
          <div>
            <div
              className='flex flex-row items-center space-x-[16px] mb-[24px]'
              onClick={companyExpandHandler}
            >
              <h2>Company</h2>
              {companyMenu ? (
                <img src={iconArrowUp} alt='' height='6' width='12' />
              ) : (
                <img src={iconArrowDown} alt='' height='6' width='12' />
              )}
            </div>

            {companyMenu && (
              <div className='space-y-[16px] ml-[24px]'>
                <p>History</p>
                <p>Our Team</p>
                <p>Blog</p>
              </div>
            )}
          </div>
          <h2>Careers</h2>
          <h2>About</h2>
        </nav>
      </div>
      <div className='fixed top-0 bg-black h-screen w-screen opacity-75'></div>
    </React.Fragment>
  );
};

export default MenuMobile;
