import React, { useState, useEffect } from "react";

import { AiOutlineDown } from "react-icons/ai";
import MenuOptions from "./MenuOptions";
import { Options } from "../lib/Options";

export default function DropDown() {
  const [showDropDown, setShowDropDown] = useState(false);

  // define a useState to store which options were selected
  const [optionChecked, setOptionChecked] = useState(Options);
  const optionList = Object.keys(Options)

  useEffect(() => {
    

    localStorage.setItem('selectedOptions', JSON.stringify(Options))
  }, [Options])

  const dropdownHandler = () => {
    setShowDropDown((prev) => !prev);
  };

  const checkboxHandler = (genre) => {
    const currentState = Options[`${genre}`]
    const newState = !currentState

    Options[`${genre}`] = newState

    setOptionChecked(Options)
    
    console.log(optionChecked)
  }

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
      <div className="p-1">{showDropDown && <MenuOptions optionList={optionList} checkboxHandler={checkboxHandler} />}</div>
    </>
  );
}
