import React from "react";

import "./AppButton.css";

const AppButton = (props) => {
  const className = props.className
    ? "app-button " + props.className
    : "app-button";
  return (
    <div className={className}>
      <button type={props.type} onClick={props.onClick}>
        {props.lable}
      </button>
    </div>
  );
};

export default AppButton;
