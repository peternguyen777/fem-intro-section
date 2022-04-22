import React from "react";
import iconTodo from "../images/icon-todo.svg";
import iconCalendar from "../images/icon-calendar.svg";
import iconReminders from "../images/icon-reminders.svg";
import iconPlanning from "../images/icon-planning.svg";

const HeaderFeaturesDropdown = () => {
  return (
    <div className='absolute'>
      <div className='mt-[36px] flex flex-col bg-white shadow-2xl p-[24px] rounded-lg space-y-[16px]'>
        <div className='flex flex-row space-x-[16px] items-center'>
          <img src={iconTodo} alt='' width='20' />
          <p className='hover:text-black cursor-pointer'>Todo List</p>
        </div>
        <div className='flex flex-row space-x-[16px] items-center'>
          <img src={iconCalendar} alt='' width='20' />
          <p className='hover:text-black cursor-pointer'>Calendar</p>
        </div>
        <div className='flex flex-row space-x-[21px] items-center'>
          <img src={iconReminders} alt='' width='15' />
          <p className='hover:text-black cursor-pointer'>Reminders</p>
        </div>
        <div className='flex flex-row space-x-[16px] items-center'>
          <img src={iconPlanning} alt='' width='20' />
          <p className='hover:text-black cursor-pointer '>Planning</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderFeaturesDropdown;
