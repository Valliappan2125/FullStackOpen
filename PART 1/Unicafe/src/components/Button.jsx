import React from "react";

const Button = ({ text, handleClick, className }) => {
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
