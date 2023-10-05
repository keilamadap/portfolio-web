import React from "react";

const TabButton = ({ children, selectTab, active }) => {
  const buttonClasses = active
    ? "text-white underline decoration-pink-500"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold  hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
