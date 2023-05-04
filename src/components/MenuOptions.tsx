import React from "react";

interface MenuOptionsProps {
  optionList: string[];
  checkboxHandler: (genre: string) => void;
}

export default function MenuOptions(props: MenuOptionsProps) {
  const { optionList, checkboxHandler } = props;
  return (
    <>
      <div className="border border-black rounded-lg p-3">
        {optionList.map((option, index) => (
          <div key={index} className="p-2">
            <label className="flex gap-2">
              <span>
                <input
                  type="checkbox"
                  value={option}
                  className="hover:cursor-pointer"
                  onClick={(e) => checkboxHandler(e.currentTarget.value)}
                />
              </span>
              <span>{option}</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
