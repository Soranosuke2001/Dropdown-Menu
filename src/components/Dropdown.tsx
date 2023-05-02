import React, { useState } from "react";

import { AiOutlineDown } from "react-icons/ai";

export default function DropDown() {
  const [showDropDown, setShowDropDown] = useState(false);

  const dropdownHandler = () => {
    setShowDropDown((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={dropdownHandler}
        className="flex w-auto justify-between border border-black rounded-lg"
      >
        <span className="flex justify-start pl-4 pr-4">Select an option</span>
        <span className="flex justify-center items-center pr-1">
          <AiOutlineDown />
        </span>
      </div>
      {showDropDown && <div>This is working</div>}
    </>
  );
}
