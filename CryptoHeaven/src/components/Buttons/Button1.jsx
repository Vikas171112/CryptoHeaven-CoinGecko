import React from "react";

function Button1({ title }) {
  return (
    <div>
      <button
        className="
   
    dark:bg-gray-800
    dark:text-shadow-amber-100
    font-semibold
    my-2
    mx-2
    px-5 py-2
    rounded-full
    shadow
    border border-amber-300
    dark:border-gray-700
    transition
    duration-200
    hover:bg-amber-300 
    hover:text-blue-700
    dark:hover:bg-amber-500/20
    dark:hover:text-amber-300
    focus:outline-none
    focus:ring-2
    focus:ring-blue-300
    dark:focus:ring-amber-300
    cursor-pointer
  "
      >
        {title}
      </button>
    </div>
  );
}

export default Button1;
