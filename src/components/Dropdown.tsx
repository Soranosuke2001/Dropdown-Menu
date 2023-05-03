import React, { useState } from "react";

import { AiOutlineDown } from "react-icons/ai";
import MenuOptions from "./MenuOptions";

export default function DropDown() {
  const [showDropDown, setShowDropDown] = useState(false);

  // define a useState to store which options were selected

  const dropdownHandler = () => {
    setShowDropDown((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={dropdownHandler}
        className="flex w-auto justify-between border border-black rounded-lg hover:cursor-pointer"
      >
        <span className="flex justify-start pl-4 pr-4">Select an option</span>
        <span className="flex justify-center items-center pr-1">
          <AiOutlineDown />
        </span>
      </div>
      <div className='p-1'>{showDropDown && <MenuOptions />}</div>
    </>
  );
}
