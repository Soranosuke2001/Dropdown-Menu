import React from "react";

import { Options } from "../lib/Options";

export default function MenuOptions() {
  return (
    <>
      <div className="border border-black rounded-lg p-3">
        {Options.map((option, index) => (
          <div key={index} className="p-2">
            <label className='flex gap-2'>
              <span>
                <input type="checkbox" value={option} className='hover:cursor-pointer' />
              </span>
              <span>{option}</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
