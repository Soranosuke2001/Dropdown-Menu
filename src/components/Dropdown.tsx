import React, { useState, useEffect } from "react";

import { AiOutlineDown } from "react-icons/ai";
import MenuOptions from "./MenuOptions";
import { menuOptions } from "../lib/Options";

export default function DropDown() {
  let Options = menuOptions
  const [showDropDown, setShowDropDown] = useState(false);

  // define a useState to store which options were selected
  const [optionChecked, setOptionChecked] = useState(Options);
  
  // This useEffect should only run once
  // Sets the local storage value
  useEffect(() => {
    // Check if the storage already has the selected options
    const data = localStorage.getItem("selectedOptions")

    // If there is already stored data, then set it as the initial state
    if (data) {
      const localOptions = JSON.parse(data)
      setOptionChecked(localOptions)
    } else {
      localStorage.setItem('selectedOptions', JSON.stringify(Options))
    }
  }, [Options])
  
  // Determines if the dropdown menu is shown or not
  const dropdownHandler = () => {
    setShowDropDown((prev) => !prev);
  };
  
  // Reversing the current state of the checkbox for each genre selected
  const checkboxHandler = (genre: string) => {
    const currentState = Options[`${genre}`]
    const newState = !currentState
    
    Options[`${genre}`] = newState
    
    setOptionChecked(Options)
    localStorage.setItem('selectedOptions', JSON.stringify(optionChecked))
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
      <div className="p-1">{showDropDown && <MenuOptions optionChecked={optionChecked} checkboxHandler={checkboxHandler} />}</div>
    </>
  );
}
