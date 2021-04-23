import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import "./BoxList.css";
import NewBoxForm from "./NewBoxForm";
const BoxList = () => {
  const [box, setbox] = useState([
    // { id: uuid(), color: "green", width: 100, height: 115 },
    // { id: uuid(), color: "yellow", width: 90, height: 85 },
    // { id: uuid(), color: "red", width: 190, height: 185 },
    // { id: uuid(), color: "black", width: 175, height: 140 }
  ]);
  const addBox = (color, width, height) => {
    const newBox = { id: uuid(), color: color, width, height: height };
    setbox(box => [...box, newBox]);
  };
  const removeData = id => {
    setbox(box.filter(box => box.id !== id));
  };
  return (
    <div>
      <h1>BOXLIST</h1>
      <NewBoxForm addBox={addBox} />
      <div className="BoxList">
        {box.map(box => (
          <Box
            removeData={removeData}
            key={box.id}
            id={box.id}
            color={box.color}
            width={box.width}
            height={box.height}
          />
        ))}
      </div>
    </div>
  );
};
export default BoxList;
