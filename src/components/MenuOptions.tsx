import React from "react";

import { Options } from "../lib/Options";

export default function MenuOptions() {
  return <>
    <div className='border border-black text-red-600'>
        {Options.map((option) => (
            <div>{option}</div>
        ))}
    </div>
  </>;
}
