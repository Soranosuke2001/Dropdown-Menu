import React from "react";

import { AiOutlineDown } from "react-icons/ai";

export default function DropDown() {
  return (
    <div className='flex w-auto justify-between border border-black rounded-lg'>
      <span className='flex justify-start pl-4 pr-4'>Select an option</span>
      <span className='flex justify-center items-center pr-1'>
        <AiOutlineDown />
      </span>
    </div>
  );
}
