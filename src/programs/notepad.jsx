import React, { useState } from "react";
import { Rnd } from "react-rnd";

function Notepad({ onClose }) {
  const [width, setWidth] = useState(320);
  const [height, setHeight] = useState(320); // Set to window's height
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // Function to handle close button click
  const handleCloseButtonClick = () => {
    onClose(); // Call the onClose prop when close button is clicked
  };

  return (
    <Rnd
      size={{ width, height }}
      position={{ x, y }}
      onDragStop={(e, d) => {
        setX(d.x);
        setY(d.y);
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setWidth(ref.style.width);
        setHeight(ref.style.height);
        setX(position.x);
        setY(position.y);
      }}
      className="window"
    >
      <div className="window_title flex items-center justify-between">
        <button
          className="close_button border-solid border-2 pr-2 pl-2 bg-close_button"
          onClick={handleCloseButtonClick} // Updated function to handle close button click
        >
          -
        </button>
        <h3 className="flex-grow">Notepad</h3>
      </div>
      <textarea className="h-[80%] w-[100%]" name="" id="" cols="1" rows="1"></textarea>
    </Rnd>
  );
}

export default Notepad;
