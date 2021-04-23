import React, { useState } from "react";
import "./Box.css";
const Box = props => {
  const handleRemove = () => {
    props.removeData(props.id);
  };
  const style = {
    backgroundColor: props.color,
    width: `${props.width}px`,
    height: `${props.height}px`
  };
  return (
    <div>
      <div className="Box" data-testid="Box" style={style}></div>
      <button data-testid="Box-delete" onClick={handleRemove}>
        X
      </button>
    </div>
  );
};
export default Box;
