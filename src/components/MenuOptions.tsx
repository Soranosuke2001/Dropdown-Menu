import React from "react";

interface MenuOptionsProps {
  optionChecked: {};
  checkboxHandler: (genre: string) => void;
}

export default function MenuOptions(props: MenuOptionsProps) {
  const { optionChecked, checkboxHandler } = props;
  const optionList = Object.keys(optionChecked);

  return (
    <>
      <div className="border border-black rounded-lg p-3">
        {optionList.map((option, index) => (
          <div key={index} className="p-2">
            <label className="flex gap-2">
              <span>
                {optionChecked[`${option}`] ? (
                  <input
                    type="checkbox"
                    value={option}
                    className="hover:cursor-pointer"
                    onClick={(e) => checkboxHandler(e.currentTarget.value)}
                    checked
                  />
                ) : (
                  <input
                    type="checkbox"
                    value={option}
                    className="hover:cursor-pointer"
                    onClick={(e) => checkboxHandler(e.currentTarget.value)}
                  />
                )}
              </span>
              <span>{option}</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
