import React from "react";

const HeaderCompanyDropdown = () => {
  return (
    <div className='absolute'>
      <div className='mt-[36px] flex flex-col bg-white shadow-2xl p-[24px] rounded-lg space-y-[16px]'>
        <p className='hover:text-black cursor-pointer'>History</p>
        <p className='hover:text-black cursor-pointer'>Our Team</p>
        <p className='hover:text-black cursor-pointer'>Blog</p>
      </div>
    </div>
  );
};

export default HeaderCompanyDropdown;
